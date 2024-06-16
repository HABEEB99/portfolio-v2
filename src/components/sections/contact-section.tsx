"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SectionHeader } from "@/components";
import { useSectionInView } from "@/hooks/use-section-in-view";

import {
  Mail,
  MessageSquare,
  Notebook,
  PenBox,
  Phone,
  Send,
  User,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
  const { ref } = useSectionInView("Contacts");

  const contactItems = [
    { title: "Email", value: "habeebahmadu1@gmail.com", icon: Mail },
    { title: "Phone", value: "+234 706 096 2880", icon: Phone },
    { title: "WhatsApp", value: "+234 706 096 2880", icon: MessageSquare },
  ] as const;

  const ClientFormSchema = z.object({
    name: z.string().min(2, "Name must be more than two character"),
    email: z.string().email(),
    projectTitle: z
      .string()
      .min(2, "Project Title must be more than two character"),
    projectDescription: z
      .string()
      .min(10, "Project description must be more than ten character"),
  });

  const form = useForm<z.infer<typeof ClientFormSchema>>({
    resolver: zodResolver(ClientFormSchema),
    defaultValues: {
      email: "",
      name: "",
      projectTitle: "",
      projectDescription: "",
    },
  });

  const sendMail = (data: z.infer<typeof ClientFormSchema>) => {
    console.log(data);
  };

  return (
    <div id="contacts" className="section pb-8" ref={ref}>
      <SectionHeader
        title="Contacts"
        description="You can contact me through the channels below"
      />

      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around m-auto">
        <div className="flex flex-col items-center justify-center gap-3">
          {contactItems.map(({ icon: Icon, title, value }) => (
            <Card
              key={title}
              className="w-full md:w-60 flex flex-col items-center justify-center"
            >
              <CardHeader>
                <CardTitle className="text-sm">{title}</CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col items-center justify-center gap-2">
                <Icon />
                <p className="text-xs">{value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="w-full md:w-[40%]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(sendMail)} className="space-y-3">
              <div className="space-y-2">
                {/* Name Field */}
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="group space-y-0">
                      <FormLabel className="text-xs group-hover:text-btn">
                        Name
                      </FormLabel>
                      <FormControl>
                        <div className="w-full flex items-center justify-between border-[2px] rounded-md px-1 group-hover:border-btn">
                          <Input
                            {...field}
                            placeholder="Name"
                            type="text"
                            className="flex-1 outline-none bg-transparent border-none border-transparent px-0 !active:bg-transparent
                            focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 fill-none
                            focus-visible:bg-transparent"
                          />
                          <User className="w-4 h-4 group-hover:text-btn" />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="group space-y-0">
                      <FormLabel className="text-xs group-hover:text-btn">
                        Email
                      </FormLabel>
                      <FormControl>
                        <div className="w-full flex items-center justify-between border-[2px] rounded-md px-1 group-hover:border-btn">
                          <Input
                            {...field}
                            placeholder="Email"
                            type="email"
                            className="flex-1 outline-none bg-transparent border-none border-transparent px-0 !active:bg-transparent
                            focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 fill-none
                            focus-visible:bg-transparent"
                          />
                          <Mail className="w-4 h-4 group-hover:text-btn" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Project Title Field */}
                <FormField
                  control={form.control}
                  name="projectTitle"
                  render={({ field }) => (
                    <FormItem className="group space-y-0">
                      <FormLabel className="text-xs group-hover:text-btn">
                        Project Title
                      </FormLabel>
                      <FormControl>
                        <div className="w-full flex items-center justify-between border-[2px] rounded-md px-1 group-hover:border-btn">
                          <Input
                            {...field}
                            placeholder="Project title"
                            type="email"
                            className="flex-1 outline-none bg-transparent border-none border-transparent px-0 !active:bg-transparent
                            focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 fill-none
                            focus-visible:bg-transparent"
                          />
                          <PenBox className="w-4 h-4 group-hover:text-btn" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Project Description Field */}
                <FormField
                  name="projectDescription"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="group space-y-0">
                      <FormLabel className="text-xs group-hover:text-btn">
                        Project Description
                      </FormLabel>
                      <FormControl>
                        <div className="w-full flex items-center justify-between border-[2px] rounded-md px-1 group-hover:border-btn">
                          <Textarea
                            {...field}
                            placeholder="Name"
                            className="flex-1 outline-none bg-transparent border-none border-transparent px-0 !active:bg-transparent
                            focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 fill-none
                            focus-visible:bg-transparent"
                          />
                          <Notebook className="w-4 h-4 group-hover:text-btn" />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                variant="main"
                className="space-x-2 flex items-center justify-center w-full md:w-60"
                size="lg"
              >
                <Send className="w-4 h-4" /> <span>Send</span>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
