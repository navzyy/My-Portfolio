import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Send } from "lucide-react"
import { cn } from "../lib/utils"
import emailjs from "emailjs-com"
import { useState } from "react";



export const ContactSection = () => {
    const[formData, setFormData]=useState({
        name:"",
        email:"",
        message:"",
    })

    const SERVICE_ID="service_imsy2vt"
    const TEMPLATE_ID="template_e7ota8l"
    const PUBLIC_KEY="hELRPHgYBCSHqdM6O"

    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((result)=>{
              alert("Message sent!")
              setFormData({name:"", email:"", message:""})

        })
        .catch(()=> alert("Oops!something went wrong.please try again."))
    
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>

                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to reach out me.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}

                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:naveenawimalarathne01@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        naveenawimalarathne01@gmail.com
                                    </a>
                                </div>

                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}

                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+94 710116305"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +94 71 011 6305
                                    </a>
                                </div>

                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}

                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a
                                        href="tel:+94 710116305"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        219/5A, School Lane, Hanwella
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect with Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/naveena-wimalarathne-70a16a200/" 
                                target="_blank">
                                    <Linkedin />
                                </a>

                                <a href="https://www.instagram.com/_navz.x_?igsh=MXZtdHN2aXgzcHY1cw%3D%3D&utm_source=qr" 
                                target="_blank">
                                    <Instagram />
                                </a>

                                <a href="https://www.facebook.com/share/174oZ5fUXK/?mibextid=wwXIfr" 
                                target="_blank">
                                    <Facebook />
                                </a>


                            </div>


                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2">
                                    {" "}
                                    Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name..."
                                    onChange={(e) => setFormData({...formData,name:e.target.value})}
                                />
                            </div>

                             <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2">
                                    {" "}
                                    Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                     value={formData.email}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="portfolio@email.com"
                                    onChange={(e) => setFormData({...formData,email:e.target.value})}
                                />
                            </div>

                             <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2">
                                    {" "}
                                    Your Message</label>
                                <textarea
                                   
                                    id="message"
                                    name="message"
                                    required
                                     value={formData.message}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Your message..."
                                    onChange={(e) => setFormData({...formData,message:e.target.value})}
                                />
                            </div>

                           <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2"

                           )}>
                           Send Message
                           <Send size={16} />
                           </button>

                        </form>
                    </div>

                </div>
            </div>

        </section>
    )
}