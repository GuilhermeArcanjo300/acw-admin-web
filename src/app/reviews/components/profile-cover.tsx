import Image from "next/image";
import profileBg from "../../../../public/profile-bg.svg";
import userImage from "../../../../public/user-profile.svg";
import { MapPin, Pen } from "@phosphor-icons/react";
import { PencilIcon } from "@/assets/icons/pencil";
import { Available } from "./available";

const ProfileCover = () => {
  return (
    <>
      <div className="w-full flex items-end justify-center relative mb-14">
        <div className="absolute -bottom-10">
          <Image
            className="h-9/10 object-cover w-[120px] lg:w-auto"
            alt="imagem do perfil do salão"
            src={userImage}
          />
          <div className="bg-white absolute top-2 right-2 p-2 rounded-full cursor-pointer">
            <PencilIcon />
          </div>
        </div>
        <Image alt="Imagem de fundo do perfil" src={profileBg} className="rounded-xl h-[100px] w-full object-cover md:h-[180px]" />
      </div>
      <div className="text-black w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold">Dellas & Delles Cabeleireiros</h2>
        <h4 className="flex flex-row text-md items-center gap-2">
          <MapPin size={16} color="#A21A1A" weight="fill" />
          Av. Ovídio Poletti, 210, Campinas/SP
        </h4>
      </div>
    </>
  );
};

export default ProfileCover;
