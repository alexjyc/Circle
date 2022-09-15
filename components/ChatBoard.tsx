import { View, Image, Text, TouchableOpacity, Pressable } from "react-native"
import React, { ReactElement } from "react"


const ChatBoard = ({userImg, bgColor, txt}): ReactElement => {
    const onProfilePress = () => {};
    return(
        <View className="p-4">
            <View className={`h-60 w-full rounded-3xl shadow-lg p-6 flex justify-between ${bgColor}`}>
                <Pressable onPress={onProfilePress}>
                    <Image
                    source={{
                        uri: userImg, 
                    }}
                    className="h-8 w-8 rounded-full"
                    />
                </Pressable>
                <View className="flex flex-row items-center">
                    <Text className="font-medium text-lg">
                        {txt}
                    </Text>
                </View>
                <View className="flex flex-row justify-end items-center">
                    <TouchableOpacity>
                        <View className={"px-4 py-3 bg-gray-200 rounded-xl"}>
                            <Text className={"text-mid font-semibold"}>
                                Chat
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            
             
        </View>
    );
};

export default ChatBoard;