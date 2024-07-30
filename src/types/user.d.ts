import Language from "@/types/language";
import Status from "@/types/status";
import Theme from "@/types/theme";

interface User {
    principal: any;
    username: string;
    avatar: string;
    language: Language;
    theme: Theme;
    status: Status;
}
