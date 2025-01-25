import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Form } from "../ui/form";
import { ReactNode } from "react";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  resetForm?: boolean;
} & TFormConfig;

type TFormConfig = { defaultValues?: Record<string, any>; resolver?: any };

const DoodleForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
  resetForm = true,
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submit = (data: FieldValues) => {
    onSubmit(data);
    // if true then will reset otherwise will not reset the form
    resetForm && methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(submit)} className="space-y-4">
          {children}
        </form>
      </Form>
    </FormProvider>
  );
};

export default DoodleForm;
