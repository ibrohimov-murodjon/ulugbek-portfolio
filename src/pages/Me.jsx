import { Typography } from "@material-tailwind/react";
import MeImg from "/assets/me/me.jpg";
import MeAndMyFriendImg from "/assets/me/me_my-friend.jpg";
import MeWithHorse from "/assets/me/me_with-horse.jpg";
import MeWithHorse2 from "/assets/me/me_with-horse-2.jpg";
import MeAndMyFriends from "/assets/me/me_friends.jpg";
import HasharTime from "/assets/me/hashar_time.jpg";
import ImageLabel from "../components/ImageLabel";
import Connect from "../components/Connect";

export default function Me() {
  const myCurrentAge = new Date().getFullYear() - 2004;
  return (
    <div className="base-container py-28">
      <div className="mb-5">
        <h1 className="mb-5 text-3xl font-bold">Men :{")"}</h1>
        <Typography>
          Ismim Mirzo Ulug'bek, familiyam Xudoyberdiyev. Hozirda {myCurrentAge}{" "}
          yoshdaman. <strong className="font-bold">Frontend dasturchi</strong>
          man. Kompyuterda kod yozishdan tashqari uni tuzatishni ham eplayman.
          Do'stlarim bilan juda ahilman.
        </Typography>
      </div>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <ImageLabel src={MeImg} label={"Istiqlol kafesida"} />
        <ImageLabel src={MeAndMyFriendImg} label={"Do'stim Omadbek bilan"} />
      </div>
      <Typography className="mb-5">
        Dasturlashdan tashqari <strong className="font-bold">moto olam</strong>
        ga hamda <strong className="font-bold">zotdor otlar</strong>ga juda
        qiziqaman.
      </Typography>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <ImageLabel src={MeWithHorse} label={'"Injiq" laqabli ot bilan men'} />
        <ImageLabel
          src={MeWithHorse2}
          label={'"Injiq" laqabli ot bilan men 2'}
        />
      </div>
      <Typography className="mb-5">
        Do'stlarim bilan tez-tez ko'rishib turamiz. Undan tashqari do'stlarim{" "}
        <strong className="font-bold">hashar</strong> kabi tashkiliy ishlarga
        yo'q deyishmaydi {")"}
      </Typography>
      <div className="mb-10 flex flex-col gap-3 sm:flex-row">
        <ImageLabel src={HasharTime} label={"Hashar, elga yarashar"} />
        <ImageLabel src={MeAndMyFriends} label={"Do'stlarim"} />
      </div>
      <Typography className="mb-5 text-2xl font-bold" as={"h2"}>
        Bog'lanish
      </Typography>

      {/* Connect */}
      <Connect />
    </div>
  );
}
