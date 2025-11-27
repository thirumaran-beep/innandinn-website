import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">Get In Touch</span>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Start Your Order Today</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you need a bulk quote, have a private label request, or just want to know more about our products, our team is ready to assist.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-heading font-bold mb-4">Quick Contacts</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-muted-foreground">
                  <span className="font-bold text-foreground">Phone:</span> +91 98765 43210
                </p>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <span className="font-bold text-foreground">Email:</span> info@innovative-innovators.com
                </p>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <span className="font-bold text-foreground">WhatsApp:</span> +91 98765 43210
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-border/50">
            <h3 className="text-2xl font-heading font-bold mb-6">Send us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-slate-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 00000 00000" {...field} className="bg-slate-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" {...field} className="bg-slate-50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Requirements / Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your order requirements..." className="min-h-[120px] bg-slate-50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full h-12 font-heading text-lg bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
