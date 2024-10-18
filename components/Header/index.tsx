import { usePathname } from 'expo-router';import { Text } from "react-native";
    
export default function Header() {
    const pathname = usePathname();
    const pageName = () => {
        if (pathname === '/') {
            return 'Today';
        }
        return pathname.replace('-', '/').split('/').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
    return <Text className="text-4xl text-center text-defaultText">{pageName()}</Text>;
}
