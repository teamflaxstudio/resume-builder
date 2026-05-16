import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormFieldProps = {
  label: string;
  value: string;
  placeholder?: string;
  type?: "text" | "email" | "date" | "number";
  textarea?: boolean;
  onChange: (value: string) => void;
};

export function FormField({
  label,
  value,
  placeholder,
  type = "text",
  textarea,
  onChange,
}: FormFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700">
      {label}
      {textarea ? (
        <Textarea
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <Input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </label>
  );
}
