import { View } from "react-native";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";


const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <View className="flex  justify-center items-center h-full">
      <Text className="text-4xl py-5">{count}</Text>

      <View className="flex  justify-center items-center flex-row gap-5">
        <Button
          variant={"secondary"}
          onPress={() => setCount((prev) => prev + 1)}
        >
          <Text className="text-4xl font-black">+</Text>
        </Button>
        <Button
          variant={"outline"}
          onPress={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          <Text className="text-4xl font-black">-</Text>
        </Button>
      </View>
    </View>
  );
};

export default Counter;
