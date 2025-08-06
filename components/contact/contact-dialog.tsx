import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, XCircle } from "lucide-react";

interface ContactDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    success: boolean;
}

export default function ContactDialog({ open, onOpenChange, success }: ContactDialogProps) {

    const icon = success ? (
        <CheckCircle className="h-16 w-16 text-white" />
    ) : (
        <XCircle className="h-16 w-16 text-white" />
    )

    const iconBgColor = success ? "bg-c-purple" : "bg-[#EF4444]"

    const title = success ? "THANK YOU FOR REACHING OUT!" : "OOPS, SOMETHING WENT WRONG!"

    const description = success
        ? "Thank you for your email. We will be in touch with you shortly."
        : "There was an issue processing your request. Please try again later."

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md p-8 text-center border-black dark:border-white">
                <DialogHeader className="flex flex-col items-center space-y-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBgColor}`}>
                        {icon}
                    </div>
                    <DialogTitle className="text-center text-2xl font-extrabold uppercase tracking-wide text-black dark:text-white">
                        {title}
                    </DialogTitle>
                    <DialogDescription className="text-center text-base text-gray-600 dark:text-gray-300 ">
                        {description}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
