/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "components/atoms/Button";
import Text from "components/atoms/Text";
import React, { useState } from "react";
import { Controller, UseFormReturn, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formRegisterSchema } from "utils/schemas";
import Input from "components/atoms/Input";
import TextArea from "components/atoms/TextArea";
import Container from "components/molecules/Container";
import Pulldown, { OptionType } from "components/molecules/Pulldown";
import Heading from "components/atoms/Heading";

export type FormDataRegister = {
    fullName: string;
    phone: string;
    email: string;
    message: string;
};

interface RegisterFormProps {
    method?: UseFormReturn<FormDataRegister>;
    handleSubmit?: (data: FormDataRegister) => void;
    title?: string;
    description?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ title, description }) => {
    const [defaultOption, setDefaultOption] = useState<OptionType>();
    const method = useForm<FormDataRegister>({
        resolver: yupResolver(formRegisterSchema),
        mode: "onSubmit",
    });
    const handleSubmitForm = (data: FormDataRegister) => {
        console.log(data);
    };
    const placeholder = {
        fullName: "Your Name*",
        email: "Email*",
        phone: "Phone*",
        content: "Reason for Contacting*",
        message: "Message*",
    };

    const options: OptionType[] = [
        {
            id: 1,
            label: "Mặc định",
            value: "default",
        },
        {
            id: 2,
            label: "TP. HCM",
            value: "hcmc",
        },
        {
            id: 3,
            label: "Hà Nội",
            value: "hanoi",
        },
        {
            id: 4,
            label: "Huế",
            value: "hue",
        },
        {
            id: 5,
            label: "Đà Nẵng",
            value: "danang",
        },
    ];
    return (
        <div className='o-formRegister'>
            <Container>
                <div className='o-formRegister_title'>
                    <Heading
                        modifiers={["700", "16x20", "workSans", "center", "gunMetal", "capitalize"]}
                    >
                        {title}
                    </Heading>
                </div>
                <div className='o-formRegister_description'>
                    <Text modifiers={["14x16", "500", "coolGrey", "center"]}> {description} </Text>
                </div>
                <FormProvider {...method}>
                    <form
                        className='o-formRegister_form'
                        onSubmit={method.handleSubmit(handleSubmitForm)}
                    >
                        <div className='o-formRegister_inputWrapp'>
                            <div className='o-formRegister_inputField'>
                                <Controller
                                    name='fullName'
                                    render={({ field, fieldState: { error } }) => (
                                        <Input
                                            id='input-fullName'
                                            placeholder={placeholder?.fullName}
                                            {...field}
                                            error={error?.message}
                                        />
                                    )}
                                />
                            </div>
                            <div className='o-formRegister_inputField'>
                                <Controller
                                    name='email'
                                    render={({ field, fieldState: { error } }) => (
                                        <Input
                                            id='input-fullName'
                                            placeholder={placeholder?.fullName}
                                            {...field}
                                            error={error?.message}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className='o-formRegister_inputWrapp'>
                            <div className='o-formRegister_inputField'>
                                <Controller
                                    name='message'
                                    render={({ field, fieldState: { error } }) => (
                                        <Pulldown
                                            {...field}
                                            placeholder={placeholder.message}
                                            options={options.filter(
                                                (option: OptionType) =>
                                                    option.id !== defaultOption?.id,
                                            )}
                                            closeOnClickOutside
                                            handleSelect={(option: OptionType) => {
                                                field.onChange(option.value);
                                                setDefaultOption(option);
                                            }}
                                            valuePullDown={defaultOption}
                                            error={error?.message}
                                        />
                                    )}
                                />
                            </div>
                            <div className='o-formRegister_inputField'>
                                <Controller
                                    name='phone'
                                    render={({ field, fieldState: { error } }) => (
                                        <Input
                                            placeholder={placeholder?.phone}
                                            type='tel'
                                            error={error?.message}
                                            {...field}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className='o-formRegister_inputWrapp'>
                            <Controller
                                name='content'
                                render={({ field, fieldState: { error } }) => (
                                    <TextArea
                                        placeholder={placeholder?.content}
                                        error={error?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </div>
                        <div className='o-formRegister_button'>
                            <Button type='submit' modifiers={["primary", "blue"]}>
                                <Text modifiers={["white", "600", "uppercase"]}>Submit</Text>
                            </Button>
                        </div>
                    </form>
                </FormProvider>
            </Container>
        </div>
    );
};

export default RegisterForm;
