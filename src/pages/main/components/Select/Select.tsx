import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./Select.scss";

interface SelectProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

export const SelectCustom = ({ setValue, value }: SelectProps) => {
  return (
    <div className="select">
      <Select
        variant="outlined"
        value={value}
        label="Age"
        onChange={(e) => setValue(e.target.value as string)}>
        <MenuItem
          style={{ background: "transparent" }}
          value={"Rating"}>
          Rating
        </MenuItem>
        <MenuItem
          style={{ background: "transparent" }}
          value={"Year"}>
          Year
        </MenuItem>
      </Select>
    </div>
  );
};
