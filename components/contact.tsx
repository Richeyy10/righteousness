"use client";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const internSchema = z.object({
    messages: z.string().min(2, "Type your message"),
    middleName: z.string().optional(),
    lastName: z.string().min(2, "Last name is required"),
    matricNumber: z.string().min(3, "Matric number is required"),
    contactNumber: z.string().min(3, "Contact number is required"),
    email: z.string().email("Invalid email address"),
    schoolName: z.string().min(2, "School name is required"),
    faculty: z.string().min(2, "Faculty is required"),
    department: z.string().min(2, "Department is required"),
    interest: z.string().min(1, "Select an interest area"),
});

export type InternFormData = z.infer<typeof internSchema>;

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
    } = useForm<InternFormData>({ resolver: zodResolver(internSchema) });

    //   const { toast } = useToast();
    const [showOther, setShowOther] = React.useState(false);

    const onSubmit = async (data: InternFormData) => {
        // try {
        //   const res = await fetch("/api/frontend", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data),
        //   });

        //   if (!res.ok) {
        //     toast({ title: "Submission failed", variant: "destructive" });
        //   } else {
        //     toast({ title: "✅ Application submitted successfully!", description: "We have received your application." });
        //     // Reset form after submit
        //     Object.keys(data).forEach((key) => setValue(key as keyof InternFormData, "" as any));
        //   }
        // } catch (error) {
        //   toast({ title: "❌ Submission failed", variant: "destructive" });
        // }
    };

    return (
        <>
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white mt-15">Get in Touch</h1>
            <p className="text-md text-center text-white/70 mt-2 mb-3">Have a project in mind? Let's get started.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="gap-4">
                <div className="mb-5 w-[70%] mx-auto">
                    <Input placeholder="Email Address" {...register("email")} disabled={isSubmitting} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className="w-[70%] mx-auto">
                    <Textarea rows={5} placeholder="Type your message" {...register("email")} disabled={isSubmitting} />
                    {errors.messages && <p className="text-red-500 text-sm">{errors.messages.message}</p>}
                </div>
                <div className="text-center">
                    <Button type="submit" disabled={isSubmitting} className="w-40 rounded-2xl px-6 py-3 mx-auto mt-4">
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                </div>
            </form>
        </>
    )
}