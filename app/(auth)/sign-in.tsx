import { icons, images } from "@/constants";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native";
import InputField from "../components/InputField";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const onSignInPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-6 left-5">
            Welcome 👋
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </View>

        <View className="p-5">
          <CustomButton
            title="Log In"
            onPress={() => onSignInPress}
            className="mt-6 "
          />

          <OAuth />

          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-8"
          >
            <Text>Don't have an account? </Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>

        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
};

export default SignIn;