import { ChangeEvent, ComponentProps, forwardRef, useEffect, useId, useImperativeHandle, useRef, useState } from "react";
import { LuCheck, LuMinus } from "react-icons/lu";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const CHECKBOX_STATES = {
  Checked: "checked",
  Indeterminate: "indeterminate",
  Empty: "empty",
} as const;

type CheckboxStates = (typeof CHECKBOX_STATES)[keyof typeof CHECKBOX_STATES];

export const checkboxStyles = cva(
  [
    "before:content[''] w-5 h-5 peer relative cursor-pointer disabled:cursor-default appearance-none rounded-[4px] disabled:checked:bg-disabled disabled:border-disabled border border-black transition-all",
  ],
  {
    variants: {
      variant: {
        default: "indeterminate:border-primary indeterminate:bg-primary [&+span>svg]:text-primary-foreground checked:border-primary checked:bg-primary",
        secondary: "indeterminate:border-secondary indeterminate:bg-secondary [&+span>svg]:text-secondary-foreground checked:border-secondary checked:bg-secondary",
        outline: "[&+span>svg]:text-black",
        danger: "indeterminate:border-danger indeterminate:bg-danger [&+span>svg]:text-danger-foreground checked:border-danger checked:bg-danger",
        success: "indeterminate:border-success indeterminate:bg-success [&+span>svg]:text-success-foreground checked:border-success checked:bg-success",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type CheckboxProps = ComponentProps<"input"> &
  VariantProps<typeof checkboxStyles> & {
    checkboxState?: (typeof CHECKBOX_STATES)[keyof typeof CHECKBOX_STATES];
  };

const CheckboxWithIndeterminate = forwardRef<HTMLInputElement, CheckboxProps>(({ variant, id, checkboxState, className, onChange, onClick, ...props }, ref) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const initialState = checkboxState || CHECKBOX_STATES.Empty;

  const [checked, setChecked] = useState<CheckboxStates>(initialState);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked((prevState) => {
      switch (prevState) {
        case CHECKBOX_STATES.Checked:
          return CHECKBOX_STATES.Empty;
        case CHECKBOX_STATES.Empty:
          return CHECKBOX_STATES.Indeterminate;
        case CHECKBOX_STATES.Indeterminate:
          return CHECKBOX_STATES.Checked;
        default:
          return CHECKBOX_STATES.Empty;
      }
    });
    if (onChange) {
      onChange(event);
    }
  };

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = checked === CHECKBOX_STATES.Checked;
      checkboxRef.current.indeterminate = checked === CHECKBOX_STATES.Indeterminate;
    }
  }, [checked]);

  useImperativeHandle(ref, () => checkboxRef.current as HTMLInputElement);

  return (
    <div className="inline-flex items-center gap-2">
      <label htmlFor={inputId} className="relative flex items-center">
        <input onChange={handleChange} ref={checkboxRef} type="checkbox" id={inputId} className={cn(checkboxStyles({ variant, className }))} onClick={onClick} {...props} />
        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100 peer-indeterminate:opacity-100 peer-disabled:[&>svg]:text-disabled-foreground">
          {checked === CHECKBOX_STATES.Checked && <LuCheck className="h-4 w-4" />}
          {checked === CHECKBOX_STATES.Indeterminate && <LuMinus className="h-4 w-4" />}
        </span>
      </label>
    </div>
  );
});

CheckboxWithIndeterminate.displayName = "CheckboxWithIndeterminate";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ variant, id = useId(), className, ...props }, ref) => {
  return (
    <div className="inline-flex items-center gap-2">
      <label htmlFor={id} className="relative flex items-center">
        <input ref={ref} id={id} type="checkbox" className={cn(checkboxStyles({ variant, className }))} {...props} />
        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100 peer-disabled:[&>svg]:text-disabled-foreground">
          <LuCheck className="h-4 w-4" />
        </span>
      </label>
    </div>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox, CheckboxWithIndeterminate };
