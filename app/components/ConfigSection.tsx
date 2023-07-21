import { Button, Grid, TextField } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";

interface ConfigurationSectionProps {
  selectedColor: string;
  selectedFont: string;
  onChangeColor: (newColor: string) => void;
  onChangeFont: (newFont: string) => void;
}

const ConfigurationSection: React.FC<ConfigurationSectionProps> = ({
  selectedColor,
  selectedFont,
  onChangeColor,
  onChangeFont,
}) => {
  const [hexColor, setHexColor] = useState(selectedColor);

  useEffect(() => {
    setHexColor(selectedColor);
  }, [selectedColor]);

  const handleColorChange = (newColor: string) => {
    setHexColor(newColor);
    onChangeColor(newColor);
  };

  const handleHexColorChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputColor = event.target.value;

    setHexColor(inputColor);
    onChangeColor(inputColor);
  };

  const handleFontChange = (newFont: string) => {
    onChangeFont(newFont);
  };

  return (
    <Grid
      container
      spacing={2}
      className="border-solid border-2 border-gray-200 pb-4 pr-4 bg-slate-100 rounded-md mb-10"
    >
      <Grid item xs={12}>
        <div className="font-bold text-lg mb-2">Configuration</div>
      </Grid>
      <Grid item xs={12}>
        <div className="mb-4">
          <p className="font-bold mb-1">Choose color:</p>
          <div className="flex flex-row gap-2 items-center">
            <TextField
              type="text"
              label="Hex color"
              value={hexColor}
              onChange={(e) => handleHexColorChange(e)}
            />
            <div
              className="w-10 h-10 rounded-md"
              style={{ backgroundColor: hexColor }}
            />
          </div>

          <div className="flex gap-2 my-2">
            <button
              onClick={() => handleColorChange("#00bcd4")}
              className="bg-[#00bcd4] w-10 h-10 rounded-md"
            />
            <button
              onClick={() => handleColorChange("#f44336")}
              className="bg-[#f44336] w-10 h-10 rounded-md"
            />
            <button
              onClick={() => handleColorChange("#4caf50")}
              className="bg-[#4caf50] w-10 h-10 rounded-md"
            />
            <button
              onClick={() => handleColorChange("#2196f3")}
              className="bg-[#2196f3] w-10 h-10 rounded-md"
            />
            <button
              onClick={() => handleColorChange("#ffeb3b")}
              className="bg-[#ffeb3b] w-10 h-10 rounded-md"
            />
            <button
              onClick={() => handleColorChange("#9c27b0")}
              className="bg-[#9c27b0] w-10 h-10 rounded-md"
            />
            <button
              onClick={() => handleColorChange("#e91e63")}
              className="bg-[#e91e63] w-10 h-10 rounded-md"
            />
            <button
              onClick={() => handleColorChange("#9e9e9e")}
              className="bg-[#9e9e9e] w-10 h-10 rounded-md"
            />
          </div>
          <div className="mb-4">
            <p className="font-bold mb-1">Choose font:</p>
            <div className="flex gap-2 my-2 items-center">
              <button
                onClick={() => handleFontChange("sans")}
                className={`font-sans w-12 h-10 rounded-md border-2 ${
                  selectedFont === "sans" ? "bg-gray-200" : "bg-white"
                }`}
              >
                Sans
              </button>
              <button
                onClick={() => handleFontChange("serif")}
                className={`font-serif w-12 h-10 rounded-md border-2 ${
                  selectedFont === "serif" ? "bg-gray-200" : "bg-white"
                }`}
              >
                Serif
              </button>
              <button
                onClick={() => handleFontChange("mono")}
                className={`font-mono w-12 h-10 rounded-md border-2 ${
                  selectedFont === "mono" ? "bg-gray-200" : "bg-white"
                }`}
              >
                Mono
              </button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ConfigurationSection;
