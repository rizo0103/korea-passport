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

import { Colors } from "@/src/theme";

export const PassportBackground = () => {
    return (
        <View
            pointerEvents="none"
            style={StyleSheet.absoluteFill}
        >
            <Svg
                width="100%"
                height="100%"
                viewBox="0 0 400 800"
                preserveAspectRatio="xMidYMid slice"
            >
                <Defs>
                    {/* =========================
                        Main background
                    ========================= */}

                    <LinearGradient
                        id="background"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <Stop
                            offset="0"
                            stopColor={Colors.background}
                        />

                        <Stop
                            offset="0.5"
                            stopColor={Colors.surface}
                        />

                        <Stop
                            offset="1"
                            stopColor={Colors.background}
                        />
                    </LinearGradient>

                    {/* =========================
                        Blue comic glow
                    ========================= */}

                    <RadialGradient
                        id="blueGlow"
                        cx="15%"
                        cy="15%"
                        r="75%"
                    >
                        <Stop
                            offset="0"
                            stopColor={Colors.primary}
                            stopOpacity="0.25"
                        />

                        <Stop
                            offset="0.45"
                            stopColor={Colors.primary}
                            stopOpacity="0.10"
                        />

                        <Stop
                            offset="1"
                            stopColor={Colors.primary}
                            stopOpacity="0"
                        />
                    </RadialGradient>

                    {/* =========================
                        Burgundy comic glow
                    ========================= */}

                    <RadialGradient
                        id="accentGlow"
                        cx="90%"
                        cy="80%"
                        r="65%"
                    >
                        <Stop
                            offset="0"
                            stopColor={Colors.accent}
                            stopOpacity="0.22"
                        />

                        <Stop
                            offset="0.45"
                            stopColor={Colors.accent}
                            stopOpacity="0.08"
                        />

                        <Stop
                            offset="1"
                            stopColor={Colors.accent}
                            stopOpacity="0"
                        />
                    </RadialGradient>

                    {/* =========================
                        Center glow
                    ========================= */}

                    <RadialGradient
                        id="centerGlow"
                        cx="50%"
                        cy="50%"
                        r="65%"
                    >
                        <Stop
                            offset="0"
                            stopColor={Colors.primaryLight}
                            stopOpacity="0.07"
                        />

                        <Stop
                            offset="1"
                            stopColor={Colors.primaryLight}
                            stopOpacity="0"
                        />
                    </RadialGradient>
                </Defs>

                {/* =========================
                    BASE
                ========================= */}

                <Rect
                    width="400"
                    height="800"
                    fill="url(#background)"
                />

                {/* Glows */}

                <Rect
                    width="400"
                    height="800"
                    fill="url(#blueGlow)"
                />

                <Rect
                    width="400"
                    height="800"
                    fill="url(#accentGlow)"
                />

                <Rect
                    width="400"
                    height="800"
                    fill="url(#centerGlow)"
                />

                {/* =========================
                    COMIC TOP BURST
                ========================= */}

                <Path
                    d="M0 0 L95 0 L35 70 Z"
                    fill={Colors.primary}
                    fillOpacity="0.08"
                />

                <Path
                    d="M0 0 L70 0 L0 95 Z"
                    fill={Colors.primaryLight}
                    fillOpacity="0.05"
                />

                {/* =========================
                    BIG COMIC CURVES
                ========================= */}

                <Path
                    d="M-100 175 C45 15 250 25 500 155"
                    fill="none"
                    stroke={Colors.primaryLight}
                    strokeWidth="2.5"
                    strokeOpacity="0.10"
                />

                <Path
                    d="M-110 205 C60 40 275 55 510 180"
                    fill="none"
                    stroke={Colors.primary}
                    strokeWidth="1.5"
                    strokeOpacity="0.14"
                />

                <Path
                    d="M-80 230 C80 85 290 90 500 205"
                    fill="none"
                    stroke={Colors.primaryLight}
                    strokeWidth="1"
                    strokeOpacity="0.07"
                />

                {/* =========================
                    BOTTOM COMIC CURVES
                ========================= */}

                <Path
                    d="M-100 650 C80 515 285 565 500 690"
                    fill="none"
                    stroke={Colors.accent}
                    strokeWidth="2.5"
                    strokeOpacity="0.10"
                />

                <Path
                    d="M-120 690 C65 550 290 610 510 735"
                    fill="none"
                    stroke={Colors.accentLight}
                    strokeWidth="1.5"
                    strokeOpacity="0.12"
                />

                <Path
                    d="M-100 720 C100 600 300 650 500 770"
                    fill="none"
                    stroke={Colors.accent}
                    strokeWidth="1"
                    strokeOpacity="0.06"
                />

                {/* =========================
                    COMIC HALFTONE DOTS
                ========================= */}

                <Circle
                    cx="325"
                    cy="80"
                    r="3"
                    fill={Colors.primaryLight}
                    fillOpacity="0.22"
                />

                <Circle
                    cx="342"
                    cy="80"
                    r="2"
                    fill={Colors.primaryLight}
                    fillOpacity="0.16"
                />

                <Circle
                    cx="358"
                    cy="80"
                    r="1.5"
                    fill={Colors.primaryLight}
                    fillOpacity="0.12"
                />

                <Circle
                    cx="315"
                    cy="98"
                    r="2"
                    fill={Colors.primaryLight}
                    fillOpacity="0.14"
                />

                <Circle
                    cx="335"
                    cy="100"
                    r="1.5"
                    fill={Colors.primaryLight}
                    fillOpacity="0.10"
                />

                {/* Burgundy dots */}

                <Circle
                    cx="55"
                    cy="690"
                    r="3"
                    fill={Colors.accentLight}
                    fillOpacity="0.20"
                />

                <Circle
                    cx="72"
                    cy="700"
                    r="2"
                    fill={Colors.accentLight}
                    fillOpacity="0.15"
                />

                <Circle
                    cx="88"
                    cy="708"
                    r="1.5"
                    fill={Colors.accentLight}
                    fillOpacity="0.10"
                />

                {/* =========================
                    COMIC RINGS
                ========================= */}

                <Circle
                    cx="35"
                    cy="390"
                    r="115"
                    fill="none"
                    stroke={Colors.primary}
                    strokeWidth="2"
                    strokeOpacity="0.045"
                />

                <Circle
                    cx="35"
                    cy="390"
                    r="145"
                    fill="none"
                    stroke={Colors.primaryLight}
                    strokeWidth="1"
                    strokeOpacity="0.035"
                />

                <Circle
                    cx="365"
                    cy="475"
                    r="125"
                    fill="none"
                    stroke={Colors.accent}
                    strokeWidth="2"
                    strokeOpacity="0.045"
                />

                <Circle
                    cx="365"
                    cy="475"
                    r="155"
                    fill="none"
                    stroke={Colors.accentLight}
                    strokeWidth="1"
                    strokeOpacity="0.03"
                />

                {/* =========================
                    COMIC SPEED LINES
                ========================= */}

                <Path
                    d="M18 285 L70 255"
                    stroke={Colors.primaryLight}
                    strokeWidth="2"
                    strokeOpacity="0.12"
                />

                <Path
                    d="M12 300 L82 260"
                    stroke={Colors.primary}
                    strokeWidth="1"
                    strokeOpacity="0.10"
                />

                <Path
                    d="M320 540 L375 505"
                    stroke={Colors.accentLight}
                    strokeWidth="2"
                    strokeOpacity="0.12"
                />

                <Path
                    d="M305 555 L390 505"
                    stroke={Colors.accent}
                    strokeWidth="1"
                    strokeOpacity="0.10"
                />

                {/* =========================
                    SMALL COMIC STARS
                ========================= */}

                <Path
                    d="M345 250 L350 265 L365 270 L350 275 L345 290 L340 275 L325 270 L340 265 Z"
                    fill={Colors.primaryLight}
                    fillOpacity="0.13"
                />

                <Path
                    d="M65 530 L69 542 L81 546 L69 550 L65 562 L61 550 L49 546 L61 542 Z"
                    fill={Colors.accentLight}
                    fillOpacity="0.11"
                />

                {/* =========================
                    SMALL COMIC DOTS
                ========================= */}

                <Circle
                    cx="45"
                    cy="110"
                    r="2.5"
                    fill={Colors.primaryLight}
                    fillOpacity="0.35"
                />

                <Circle
                    cx="350"
                    cy="145"
                    r="2.5"
                    fill={Colors.accentLight}
                    fillOpacity="0.30"
                />

                <Circle
                    cx="315"
                    cy="620"
                    r="2.5"
                    fill={Colors.primaryLight}
                    fillOpacity="0.25"
                />

                <Circle
                    cx="65"
                    cy="700"
                    r="2"
                    fill={Colors.accentLight}
                    fillOpacity="0.30"
                />

                {/* =========================
                    COMIC BORDER ACCENTS
                ========================= */}

                <Path
                    d="M0 120 L0 220"
                    stroke={Colors.primary}
                    strokeWidth="4"
                    strokeOpacity="0.12"
                />

                <Path
                    d="M400 570 L400 670"
                    stroke={Colors.accent}
                    strokeWidth="4"
                    strokeOpacity="0.12"
                />
            </Svg>
        </View>
    );
};