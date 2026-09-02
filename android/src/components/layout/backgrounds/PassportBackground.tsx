import { StyleSheet, View } from "react-native";
import Svg, {
    Circle,
    Defs,
    LinearGradient,
    Path,
    RadialGradient,
    Rect,
    Stop,
} from "react-native-svg";

export const PassportBackground = () => {
    return (
        <View pointerEvents="none" style={StyleSheet.absoluteFill}>
            <Svg
                width="100%"
                height="100%"
                viewBox="0 0 400 800"
                preserveAspectRatio="xMidYMid slice"
            >
                <Defs>
                    {/* Main background */}
                    <LinearGradient
                        id="background"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <Stop
                            offset="0"
                            stopColor="#121212"
                        />
                        <Stop
                            offset="0.5"
                            stopColor="#101A2A"
                        />
                        <Stop
                            offset="1"
                            stopColor="#121212"
                        />
                    </LinearGradient>

                    {/* Blue glow */}
                    <RadialGradient
                        id="blueGlow"
                        cx="50%"
                        cy="20%"
                        r="70%"
                    >
                        <Stop
                            offset="0"
                            stopColor="#004A94"
                            stopOpacity="0.28"
                        />
                        <Stop
                            offset="1"
                            stopColor="#004A94"
                            stopOpacity="0"
                        />
                    </RadialGradient>

                    {/* Burgundy glow */}
                    <RadialGradient
                        id="redGlow"
                        cx="80%"
                        cy="75%"
                        r="60%"
                    >
                        <Stop
                            offset="0"
                            stopColor="#901D2F"
                            stopOpacity="0.20"
                        />
                        <Stop
                            offset="1"
                            stopColor="#901D2F"
                            stopOpacity="0"
                        />
                    </RadialGradient>

                    {/* Soft center glow */}
                    <RadialGradient
                        id="centerGlow"
                        cx="50%"
                        cy="50%"
                        r="55%"
                    >
                        <Stop
                            offset="0"
                            stopColor="#3366CC"
                            stopOpacity="0.08"
                        />
                        <Stop
                            offset="1"
                            stopColor="#3366CC"
                            stopOpacity="0"
                        />
                    </RadialGradient>
                </Defs>

                {/* Base */}
                <Rect
                    width="400"
                    height="800"
                    fill="url(#background)"
                />

                {/* Blue glow */}
                <Rect
                    width="400"
                    height="800"
                    fill="url(#blueGlow)"
                />

                {/* Burgundy glow */}
                <Rect
                    width="400"
                    height="800"
                    fill="url(#redGlow)"
                />

                {/* Center glow */}
                <Rect
                    width="400"
                    height="800"
                    fill="url(#centerGlow)"
                />

                {/* Decorative curved lines */}
                <Path
                    d="M-80 170 C80 20 250 40 480 150"
                    fill="none"
                    stroke="#3366CC"
                    strokeWidth="1"
                    strokeOpacity="0.12"
                />

                <Path
                    d="M-100 205 C90 45 270 70 500 175"
                    fill="none"
                    stroke="#004A94"
                    strokeWidth="1"
                    strokeOpacity="0.10"
                />

                <Path
                    d="M-80 650 C100 520 280 580 480 690"
                    fill="none"
                    stroke="#901D2F"
                    strokeWidth="1"
                    strokeOpacity="0.10"
                />

                <Path
                    d="M-120 690 C80 550 290 620 500 730"
                    fill="none"
                    stroke="#B73A50"
                    strokeWidth="1"
                    strokeOpacity="0.07"
                />

                {/* Small decorative circles */}
                <Circle
                    cx="45"
                    cy="110"
                    r="2"
                    fill="#3366CC"
                    fillOpacity="0.35"
                />

                <Circle
                    cx="350"
                    cy="145"
                    r="2"
                    fill="#B73A50"
                    fillOpacity="0.3"
                />

                <Circle
                    cx="315"
                    cy="620"
                    r="2"
                    fill="#3366CC"
                    fillOpacity="0.25"
                />

                <Circle
                    cx="65"
                    cy="700"
                    r="1.5"
                    fill="#B73A50"
                    fillOpacity="0.3"
                />

                {/* Large subtle rings */}
                <Circle
                    cx="40"
                    cy="400"
                    r="110"
                    fill="none"
                    stroke="#004A94"
                    strokeWidth="1"
                    strokeOpacity="0.045"
                />

                <Circle
                    cx="40"
                    cy="400"
                    r="145"
                    fill="none"
                    stroke="#004A94"
                    strokeWidth="1"
                    strokeOpacity="0.035"
                />

                <Circle
                    cx="365"
                    cy="470"
                    r="120"
                    fill="none"
                    stroke="#901D2F"
                    strokeWidth="1"
                    strokeOpacity="0.045"
                />
            </Svg>
        </View>
    );
};