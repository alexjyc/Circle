import {View, Text, TouchableOpacity} from "react-native";
import React, { ReactElement } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


const ChatHeader = ({header}): ReactElement | null => {
    const navigation = useNavigation();

    return (
        <View className="p-2 flex-row items-center justify-between ">
            <View className="flex flex-row items-center">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" size={30} />
                </TouchableOpacity>
                <Text className="font-bold pl-2"> 
                    {header}
                </Text>
            </View>
        </View>
    );
};

export default ChatHeader;