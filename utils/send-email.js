import { emailTemplates } from "./email-template";

export const sendRemindersEmail = async ({ to, type, subscription }) => {
    if(!to || !type) throw new Error("Missing required parameters");

    const template = emailTemplates.find((t) => t.label===type);

    const mailInfo = {
        userName : subscription.user.name,
        subscriptionname : subscription.name,
        renewalDate: dayjs(subscription.renewalDate).format('MMM D, YYYY'),
        planeName: subscription.name,
        price: `${subscription.currency} ${subscription.price} (${subscription.frequency})`,

    }
}