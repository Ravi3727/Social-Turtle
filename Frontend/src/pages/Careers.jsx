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

export default function Careers() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
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

      {/* Application Form */}
      <section className="px-6 py-16 ">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              style={{
                fontFamily: "Calisga, serif",
                fontWeight: 350,
                lineHeight: 1.56,
              }}
            >
              Ready to be a part of
              <br />
              the Turtle Tribe?
            </h2>
            <p
              className="text-gray-600 text-lg"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 500,
                lineHeight: 1.56,
                fontSize: 19,
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
              className="border-0 border-b border-gray-300 rounded-none bg-transparent pb-3 focus:border-lime-400"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 550,
                lineHeight: 1.56,
                fontSize: 19,
              }}
            />
            <Input
              placeholder="Email"
              type="email"
              className="border-0 border-b border-gray-300 rounded-none bg-transparent pb-3 focus:border-lime-400"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 550,
                lineHeight: 1.56,
                fontSize: 19,
              }}
            />
            <Input
              placeholder="Phone no."
              type="tel"
              className="border-0 border-b border-gray-300 rounded-none bg-transparent pb-3 focus:border-lime-400"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 550,
                lineHeight: 1.56,
                fontSize: 19,
              }}
            />
            <Select>
              <SelectTrigger
                className="border-0 border-b text-gray-500 border-gray-300 rounded-none bg-transparent pb-3 focus:border-lime-400"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 550,
                  lineHeight: 1.56,
                  fontSize: 19,
                }}
              >
                <SelectValue placeholder="Position"></SelectValue>
              </SelectTrigger>
              <SelectContent
                className="z-50 bg-white"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 550,
                  lineHeight: 1.56,
                  fontSize: 19,
                }}
              >
                <SelectItem value="designer">Product Designer</SelectItem>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="marketing">Marketing Specialist</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Message"
              className="border-0 border-b border-gray-300 rounded-none bg-transparent pb-3 focus:border-lime-400 resize-none"
              rows={2}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 550,
                lineHeight: 1.56,
                fontSize: 19,
              }}
            />

            {/* File Upload */}
            <div className="flex items-stretch">
              {/* Hidden input */}
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="bg-black text-white px-8 py-4 flex items-center h-full">
                  <Upload className="mr-2 h-6 w-6" />
                  Upload CV
                </span>
              </label>

              {/* File name display with remove option */}
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
                <span className="border border-gray-400 px-5 py-3 text-gray-400 w-[180px] truncate">
                  No file chosen
                </span>
              )}
            </div>

            <Button
              className="bg-[#a1ca3a] text-black px-22 py-7 rounded-full cursor-pointer active:scale-90 transition "
              style={{
                fontFamily: "Montserrat,sans-serif",
                fontWeight: 450,
                fontSize: 19,
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
