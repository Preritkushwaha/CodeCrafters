import dotenv from "dotenv";
import express from "express";
import twilio from "twilio";
import cors from "cors";
import axios from "axios";

dotenv.config();
const accountSid = "AC6fe2f8bb04acf3389b45ee150a411b1d";
const authToken = "d0dc880a223913d3d8a7de80e7521b66";
const client = twilio(accountSid, authToken);
console.log(authToken);
const Port = 8000;
const app = express();
app.use(cors());
app.listen(Port, () => {
  console.log(`Server started at ${Port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/sent", (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(`${latitude} ${longitude}`);
  try{
  axios
    .get(
      `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=67308e849cb21547202889qgm283d67`
    )
    .then((res) => {
        const map=res.data.display_name;
      console.log(res.data.display_name);

      const sendsms = async (body) => {
        let arr = ["+919893118260"];
        try {
          const messages = arr.map((number) => {
            return client.messages.create({
              from: "+13132635745",
              to: number,
              body,
            });

          });

          await Promise.all(messages);
          
          console.log("Messages sent successfully");
        } catch (e) {
          console.log("Failed to send messages:", e);
        }
      };
      sendsms(`I am in danger and my locaion is ${map}, My coord:${latitude} and ${longitude} and find me:  https://www.google.com/maps/place/${latitude},${longitude}`);

    })}
    catch(e){
      console.log(e);
    };
  
  res.send("messages sent");
});
