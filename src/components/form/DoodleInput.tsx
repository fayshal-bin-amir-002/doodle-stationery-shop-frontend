import { FormControl, FormItem, FormMessage } from "@/components/ui/form"; // Adjust the path as needed
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type DoodleInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  readOnly?: boolean;
};

const DoodleInput = ({
  name,
  label,
  placeholder,
  type,
  readOnly,
}: DoodleInputProps) => {
  const [open, setOpen] = useState(false);
  const { control } = useFormContext();

  const EyeIcon = open ? EyeOff : Eye;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          {label && <p className="text-sm">{label}</p>}
          <FormControl>
            <div className="relative">
              <Input
                readOnly={readOnly}
                type={type && !open ? type : open ? "text" : "password"}
                // type={"password"}
                placeholder={placeholder}
                {...field}
              />
              {type === "password" && (
                <EyeIcon
                  onClick={() => setOpen(!open)}
                  className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
                  size={18}
                />
              )}
            </div>
          </FormControl>
          {error && <FormMessage>{error?.message}</FormMessage>}
        </FormItem>
      )}
    />
  );
};

export default DoodleInput;
