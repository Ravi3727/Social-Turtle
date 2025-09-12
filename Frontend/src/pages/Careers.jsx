import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Upload, X } from "lucide-react";
import { useState } from "react";
import groupImg from "../assets/group.png";
import Positions from "../components/careersPageSection/Positions";
import { toast } from "react-toastify";

export default function Careers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("developer");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 🔍 DEBUG: Log all current state values
    console.log("=== FORM DEBUG ===");
    console.log("Name:", name, "| Empty?", !name);
    console.log("Email:", email, "| Empty?", !email);
    console.log("Phone:", phone, "| Empty?", !phone);
    console.log("Position:", position, "| Empty?", !position);
    console.log("File:", file, "| Missing?", !file);
    console.log("File name:", file?.name);
    console.log("================");

    if (!name || !email || !phone || !position || !file) {
      alert("Please fill in all required fields and upload your CV.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position", position);
    formData.append("message", message);
    formData.append("cv", file);
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    try {
      const res = await fetch(`${BACKEND_URL}/careers/apply`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Application submitted successfully!");
        console.log(data);

        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setPosition("developer");
        setMessage("");
        setFile(null);
      } else {
        toast.error("Failed to submit application: " + data.message);
      }
    } catch (error) {
      // console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-[28px] sm:text-3xl md:text-5xl lg:text-6xl text-gray-900 mb-2 whitespace-nowrap"
            style={{
              fontFamily: "Helvetica Neue, Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            Join Our Team & Build
          </h1>

          <h2
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold md:mt-6 mb-6 whitespace-nowrap"
            style={{
              fontFamily: "Calisga, serif",
              color: "#a1ca3a",
              fontWeight: 400,
            }}
          >
            The Future Together
          </h2>

          <p
            className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 450,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Lorem praesent ultricies
            viverra sit maecenas commodo. Pretium amet ligula n
          </p>

          <Button
            className="bg-[#a1ca3a] text-black px-8 py-4 rounded-full"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              fontSize: 18,
            }}
          >
            Explore Positions
          </Button>
        </div>
      </section>

      {/* Team Image */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <img
            src={groupImg}
            alt="Team giving thumbs up"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
        </div>
      </section>

      <Positions></Positions>

      {/* Application Form */}
      <section className="px-6 py-16">
        <form
          onSubmit={handleSubmit}
          className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h2
              className="text-[28px] md:text-[42px] leading-[1.56] font-bold text-gray-900 mb-6"
              style={{
                fontFamily: "Calisga, serif",
                fontWeight: 350,
              }}
            >
              Ready to be a part of
              <br />
              the Turtle Tribe?
            </h2>
            <p
              className="text-gray-600 leading-[1.56] md:text-[20px]  text-[16px]"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 500,
              }}
            >
              Fill out the form below and let's build
              <br />
              something amazing together.
            </p>
          </div>

          <div className="space-y-10">
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-0 leading-[1.56] text-[16px] md:text-[20px] border-b border-gray-300 rounded-none bg-transparent pb-3 focus:border-lime-400"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 450,
              }}
            />
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 450,
              }}
              className="border-0 leading-[1.56] text-[16px] md:text-[20px] border-b border-gray-300 rounded-none bg-transparent pb-3 focus:border-lime-400"
            />
            <Input
              placeholder="Phone no."
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 450,
              }}
              className="border-0 leading-[1.56] md:text-[20px] text-[16px] border-b border-gray-300 rounded-none bg-transparent pb-3 focus:border-lime-400"
            />
            <Select value={position} onValueChange={setPosition}>
              <SelectTrigger
                className="border-0 border-b md:text-[20px] text-gray-500 border-gray-300 cursor-pointer leading-[1.56] text-[16px] rounded-none bg-transparent pb-3 focus:border-lime-400"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 450,
                }}
              >
                <SelectValue className="text-black" />
              </SelectTrigger>
              <SelectContent className="z-50 leading-[1.56] md:text-[20px] text-[16px] bg-white">
                <SelectItem value="designer">Product Designer</SelectItem>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="marketing">Marketing Specialist</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 450,
              }}
              className="border-0 leading-[1.56] md:text-[20px] text-[16px] border-b border-gray-300 rounded-none bg-transparent pb-3 focus:border-lime-400 resize-none"
              rows={2}
            />

            {/* File Upload */}
            <div className="w-full flex justify-center md:justify-start">
              <div className="flex flex-col md:flex-row items-center md:items-stretch gap-3">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <span
                    className="bg-black text-white px-8 py-2 md:py-3 flex text-[14px] items-center h-full"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 450,
                    }}
                  >
                    <Upload className="mr-2 h-6 w-6" />
                    Upload CV
                  </span>
                </label>

                {file ? (
                  <div className="flex items-center border border-gray-400 px-4 py-2 md:py-3 text-gray-700 md:max-w-[220px] max-w-full">
                    <span className="truncate flex-1">{file.name}</span>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="ml-2 text-gray-500 hover:text-black cursor-pointer"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <span
                    className="border text-center border-gray-400 px-5 py-2 md:py-3 text-gray-400 w-full md:w-[150px] truncate"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 450,
                    }}
                  >
                    No file chosen
                  </span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center md:justify-start mt-6">
              <Button
                type="submit"
                className="bg-[#a1ca3a] text-black px-10 py-4 rounded-full active:scale-90 transition w-[85%] sm:w-[40%] md:w-auto"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 500,
                  fontSize: 18,
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
