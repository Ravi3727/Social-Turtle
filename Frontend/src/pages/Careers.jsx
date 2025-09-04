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
            className="text-4xl text-gray-900 mb-4"
            style={{
              fontFamily: "Helvetica Neue, Arial, sans-serif",
              fontWeight: 700,
              fontSize: 55,
            }}
          >
            Join Our Team & Build
          </h1>
          <h2
            className="text-4xl md:text-6xl font-bold text-lime-400 mt-8 mb-8"
            style={{
              fontFamily: "Calisga, serif",
              color: "#a1ca3a",
              fontWeight: 350,
            }}
          >
            The Future Together
          </h2>
          <p
            className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto"
            style={{
              fontFamily: "Montserrat,sans-serif",
              fontWeight: 450,
              fontSize: 19,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Lorem praesent ultricies
            viverra sit maecenas commodo. Pretium amet ligula n
          </p>
          <Button
            className="bg-[#a1ca3a] text-black px-10 py-6 rounded-full "
            style={{
              fontFamily: "Montserrat,sans-serif",
              fontWeight: 450,
              fontSize: 19,
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
              className="text-4xl leading-[1.56] font-bold text-gray-900 mb-6"
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
              className="text-gray-600 leading-[1.56] text-[19px] text-lg"
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
              className="border-0 leading-[1.56] text-[19px] border-b border-gray-300 rounded-none bg-transparent pb-3 focus:border-lime-400"
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
              className="border-0 leading-[1.56] text-[19px] border-b border-gray-300 rounded-none bg-transparent pb-3 focus:border-lime-400"
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
              className="border-0 leading-[1.56] text-[19px] border-b border-gray-300 rounded-none bg-transparent pb-3 focus:border-lime-400"
            />
            <Select value={position} onValueChange={setPosition}>
              <SelectTrigger
                className="border-0 border-b text-gray-500 border-gray-300 cursor-pointer leading-[1.56] text-[19px] rounded-none bg-transparent pb-3 focus:border-lime-400"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 450,
                }}
              >
                <SelectValue className="text-black" />
              </SelectTrigger>
              <SelectContent className="z-50 leading-[1.56] text-[19px] bg-white">
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
              className="border-0 leading-[1.56] text-[19px] border-b border-gray-300 rounded-none bg-transparent pb-3 focus:border-lime-400 resize-none"
              rows={2}
            />

            {/* File Upload */}
            <div className="flex items-stretch">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span
                  className="bg-black text-white px-8 py-4 flex items-center h-full"
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
                <div className="flex items-center justify-center border border-gray-400 px-4 py-3 text-gray-700 max-w-[220px]">
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
                  className="border text-center border-gray-400 px-5 py-3 text-gray-400 w-[180px] truncate"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 450,
                  }}
                >
                  No file chosen
                </span>
              )}
            </div>

            <Button
              type="submit"
              className="bg-[#a1ca3a] text-black px-22 py-7 rounded-full cursor-pointer active:scale-90 transition"
            >
              Submit
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
