import { Controller, useFormContext } from "react-hook-form";
import { FormControl, FormItem, FormMessage } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type TDoodleSelectProps = {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
};

const DoodleSelect = ({
  name,
  label,
  options,
  placeholder,
}: TDoodleSelectProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue="" // Ensure the select is controlled
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          {label && <p className="text-sm font-medium mb-2">{label}</p>}
          <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder={placeholder || "Select an option"} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          {error && <FormMessage>{error.message}</FormMessage>}
        </FormItem>
      )}
    />
  );
};

export default DoodleSelect;
