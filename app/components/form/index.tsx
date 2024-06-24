"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { TPost, postSchema } from "./schema";


export function Form() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TPost>({
        resolver: zodResolver(postSchema),
    });

    const onSubmit = async (data: TPost) => {

        console.log(data)
    }


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2"
        >

            <input

                {...register("title")}
                className="px-4 py-2 rounded"
                placeholder="Titulo"
            />
            {errors.title && (
                <p className="text-red-500">{`${errors.title.message}`}</p>
            )}

            <input
                {...register("content")}
                className="px-4 py-2 rounded"
                placeholder="Conteúdo"
            />

            {errors.content && (
                <p className="text-red-500">{`${errors.content.message}`}</p>
            )}

            <button
                disabled={isSubmitting}
                type="submit"
                className="bg-blue-500 dissabled:bg-gray-500 py-2 rounded"
            >
                Postar
            </button>
        </form>
    )
}