"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { TPostProps, postSchema } from "./schema";


export function Form() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TPostProps>({
        resolver: zodResolver(postSchema),
    });

    const handleForm = (data: TPostProps) => {

        console.log(data)
    }


    return (
        <form
            onSubmit={handleSubmit(handleForm)}
            className="flex flex-col gap-y-2"
        >

            <input
                type="text"
                {...register("title")}
                className="px-4 py-2 rounded"
                placeholder="Titulo"
            />
            {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
            )}

            <input
                type="text"
                {...register("content")}
                className="px-4 py-2 rounded"
                placeholder="Conteúdo"
            />

            {errors.content && (
                <p className="text-red-500">{errors.content.message}</p>
            )}

            <button
                type="submit"
                className="bg-blue-500 dissabled:bg-gray-500 py-2 rounded"
            >
                Postar
            </button>
        </form>
    )
}