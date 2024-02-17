import React from "react";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { PDFProps, ResumeProfile } from "@/components/pdf-editor/pdf-handler";
import profileIcon from "@/assets/img/profile.jpeg";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  section: {
    padding: 10,
    flexGrow: 1,
    width: "30%",
    backgroundColor: "#e4f1fe",
  },

  section2: {
    padding: 10,
    flexGrow: 1,
    width: "70%",
    backgroundColor: "white",
  },
  logo: {
    borderRadius: 50,
    borderColor: "#0068d8",
    borderWidth: 3,
    borderStyle: "solid",
    width: "100px",
    height: "100px",
    margin: 24,
    marginLeft: "auto",
    marginRight: "auto",
  },

  logo_img: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});

// Create Document Component;
export default function Dummy(resume: ResumeProfile) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.logo}>
            <Image style={styles.logo_img} src={profileIcon.src} />
          </View>
          <Text>
            {resume.first} {resume.last}
          </Text>
        </View>

        <View style={styles.section2}>
          <Text>Section dsfsdffsdfsad #2</Text>
        </View>
      </Page>
    </Document>
  );
}
