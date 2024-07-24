// components/CustomFileInput.tsx
import React, { useRef, ChangeEvent } from 'react';
import { Flex, Text } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

interface CustomFileInputProps {
  onFileSelect: (file: File) => void;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      onFileSelect(event.target.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Flex
        direction={"column"}
        gap={1}
        justify="center"
        align="center"
      >
        <IconPhoto stroke={1} size={50} color="#003F62" />
        <Text c={"#70706E"}>
          Drop your image here, or browse
          <Text ta={"center"} c={"#70706E"}>
            Jpeg, png are allowed
          </Text>
        </Text>
      </Flex>
    </div>
  );
};

export default CustomFileInput;
