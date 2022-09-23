import React, { useMemo, useRef } from "react";
import styled, { css } from "styled-components";
import API from 'apisauce'

const baseURL = `http://181.209.144.112:3000`

const APICall = API.create({baseURL: baseURL})


type TextareaProps = {
  value: string;
  numOfLines: number;
  onValueChange: (value: string) => void;
  placeholder?: string;
  name?: string;
};

const StyledTextareaWrapper = styled.div`
  margin: auto;
  border: 1px solid grey;
  border-radius: 2px;
  width: 50%;
  height: 600px;
  padding: 10px;
`;

const sharedStyle = css`
  margin: 0;
  padding: 10px 0;
  height: 560px;
  border-radius: 0;
  resize: none;
  outline: none;
  font-family: monospace;
  font-size: 16px;
  line-height: 1.2;
  &:focus-visible {
    outline: none;
  }
`;

const StyledTextarea = styled.textarea`
  ${sharedStyle}
  padding-left: 3.5rem;
  width: calc(100% - 3.5rem);
  border: none;
  background: #45524D;
  &::placeholder {
    color: grey;
  }
`;

const StyledNumbers = styled.div`
  ${sharedStyle}
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  text-align: right;
  box-shadow: none;
  position: absolute;
  color: grey;
  border: none;
  background-color: #282a3a;
  padding: 10px;
  width: 1.5rem;
`;

const StyledNumber = styled.div<{ active: boolean }>`
  color: ${(props) => (props.active ? "blue" : "inherit")};
`;



export const Editor = ({
  value,
  numOfLines,
  onValueChange,
  placeholder = "Enter YAPL code",
  name,
}: TextareaProps) => {
  const lineCount = useMemo(() => value.split("\n").length, [value]);
  const linesArr = useMemo(
    () =>
      Array.from({ length: Math.max(numOfLines, lineCount) }, (_, i) => i + 1),
    [lineCount, numOfLines]
  );

  const lineCounterRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onValueChange(event.target.value);
  };

  const handleTextareaScroll = () => {
    if (lineCounterRef.current && textareaRef.current) {
      lineCounterRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  async function posting(val: string){
    const response = await APICall.post(
      '/file',
      {
          "code": val
      }
    );
    return response
  }

  const onClickHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(event){
      console.log(value)
      var response = posting(value)
      console.log(response)
    }
  }

  

  return (
    <div>
      <StyledTextareaWrapper>
        <StyledNumbers ref={lineCounterRef}>
          {linesArr.map((count) => (
            <StyledNumber active={count <= lineCount} key={count}>
              {count}
            </StyledNumber>
          ))}
        </StyledNumbers>
        <StyledTextarea
          name={name}
          onChange={handleTextareaChange}
          onScroll={handleTextareaScroll}
          placeholder={placeholder}
          ref={textareaRef}
          value={value}
          wrap="off"
        />
        <button onClick={onClickHandle}>Compile from text</button>
      </StyledTextareaWrapper>
      
    </div>
  );
};