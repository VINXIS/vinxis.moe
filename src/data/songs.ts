export interface Song {
    title: string;
    year: number;
    genre: string;
    length: string;
    links: SongLink[];
  }

export type Service = "Youtube" | "Soundcloud" | "Bandcamp" | "Spotify" | "Apple";
  
  interface SongLink {
    url: string;
    name: Service;
    icon: string;
  }
  
const youtube = (id: string): SongLink => ({
    url: `https://youtu.be/${id}`,
    name: "Youtube",
    icon: "../images/discography/youtube.png",
});
  
const soundcloud = (id: string): SongLink => ({
    url: `https://soundcloud.com/vinxis/${id}`,
    name: "Soundcloud",
    icon: "../images/discography/soundcloud.png",
});
  
const bandcamp = (id: string): SongLink => ({
    url: `https://vinxis.bandcamp.com/track/${id}`,
    name: "Bandcamp",
    icon: "../images/discography/bandcamp.png",
});
  
const spotify = (id: string): SongLink => ({
    url: `spotify:track:${id}`,
    name: "Spotify",
    icon: "../images/discography/spotify.png",
});
  
const apple = (id: string): SongLink => ({
    url: `https://itunes.apple.com/us/album/${id}?app=music&ign-mpt=uo%3D4`,
    name: "Apple",
    icon: "../images/discography/apple.png",
});
  
// Updated songs array using the functions
export const songs: Song[] = [
    {
        title: "gaburyu - サモンセンス (VINXIS Remix)",
        year: 2025,
        genre: "Electronic",
        length: "4:25",
        links: [
            youtube("wM7yrojcxp0"),
            soundcloud("gaburyu-vinxis-remix"),
        ],
    },
    {
        title: "上昇の旅 ～ The Ascending Journey",
        year: 2022,
        genre: "Artcore",
        length: "2:32",
        links: [
            youtube("NAqdOfIVm2A"),
            soundcloud("the-ascending-journey"),
            bandcamp("the-ascending-journey"),
            spotify("3LJLsYrCz7COMf6mww1is4"),
            apple("1647818320"),
        ],
    },
    {
        title: "Awaken",
        year: 2022,
        genre: "Swing Downtempo",
        length: "4:12",
        links: [
            youtube("snrc9j6HegM"),
            soundcloud("awaken"),
            bandcamp("awaken"),
            spotify("699cR3vfXGSm8gfD7QoxM1"),
            apple("1638861998"),
        ],
    },
    {
        title: "Commencement",
        year: 2022,
        genre: "Drone / Orchestral",
        length: "5:45",
        links: [
            youtube("43OgXi1tsPw"),
            soundcloud("commencement"),
            bandcamp("commencement"),
            spotify("462JFoVGbKnuRBLUFZ2f6X"),
            apple("1638844498"),
        ],
    },
    {
        title: "FALL",
        year: 2022,
        genre: "Polyrhythmic Orchestral",
        length: "2:25",
        links: [
            youtube("_FlHUWVjHvY"),
            soundcloud("fall"),
            bandcamp("fall"),
            spotify("1ImNhPQO1iFdm2fPuQKMF2"),
            apple("1586479956"),
        ],
    },
    {
        title: "Acrimony",
        year: 2021,
        genre: "Hybrid Orchestral",
        length: "2:43",
        links: [
            youtube("YPMWOXOxGg8"),
            soundcloud("acrimony"),
            bandcamp("acrimony"),
            spotify("1xKQiNpoSUBd7bCzSJoVqP"),
            apple("1545808953"),
        ],
    },
    {
        title: "Chima",
        year: 2021,
        genre: "Drum & Bass",
        length: "3:50",
        links: [
            youtube("hcmBAqJoFDU"),
            soundcloud("chima"),
            bandcamp("chima"),
            spotify("4DGzWQ09F25uVyn3epAyUx"),
            apple("1545809080"),
        ],
    },
    {
        title: "Sleep",
        year: 2021,
        genre: "Dubstep",
        length: "6:03",
        links: [
            youtube("bp5UBpU2eRE"),
            soundcloud("sleep"),
            bandcamp("sleep"),
            spotify("0tPOVommjTqeZI2xtDwGnw"),
            apple("1545807010"),
        ],
    },
    {
        title: "Don't Want Any",
        year: 2021,
        genre: "Lo-Fi Hiphop",
        length: "1:37",
        links: [
            youtube("x_Y9ywgcA3A"),
            soundcloud("dont-want-any"),
            bandcamp("dont-want-any"),
            spotify("5684CFzCInIF0wcHniVQ7n"),
            apple("1545808798"),
        ],
    },
    {
        title: "Time To Think",
        year: 2021,
        genre: "Chillout",
        length: "2:45",
        links: [
            youtube("1cKD1Bw_REY"),
            soundcloud("time-to-think"),
            bandcamp("time-to-think"),
            spotify("1zws9KxX3UIWLGdVtH7KwF"),
            apple("1545382269"),
        ],
    },
    {
        title: "Facade",
        genre: "Hybrid Orchestral",
        length: "2:55",
        year: 2018,
        links: [
            youtube("lH278b_WFsc"),
            soundcloud("facade"),
            bandcamp("facade"),
            spotify("5gb33S9kKA3yX0uyJVbjw5"),
            apple("1378037820"),
        ],
    },
    {
        title: "Greetings (Extended Mix)",
        genre: "Drum and Bass",
        length: "6:38",
        year: 2018,
        links: [
            youtube("cEhLC31Q1ZI"),
            soundcloud("greetings-extended-mix"),
            bandcamp("greetings-extended-mix"),
            spotify("48XeGNjEVKHT1moISiOuZR"),
            apple("1354600978"),
        ],
    },
    {
        title: "Free",
        genre: "Hard Dance",
        length: "3:56",
        year: 2018,
        links: [
            youtube("-L1m5_J0oKc"),
            soundcloud("free"),
            bandcamp("free"),
            spotify("0jKc2sxrv8BskH8vf7oIPB"),
            apple("1348077022"),
        ],
    },
    {
        title: "Sidetracked Day",
        genre: "Drum and Bass",
        length: "5:38",
        year: 2018,
        links: [
            youtube("-40fLtf9Hio"),
            soundcloud("sidetracked-day"),
            bandcamp("sidetracked-day"),
            spotify("04tHEujy90CzUZB9PPDhzC"),
            apple("1342478466"),
        ],
    },
    {
        title: "Nostalgia (w. Emeskey)",
        genre: "Chillout",
        length: "1:54",
        year: 2016,
        links: [
            youtube("rTMmGP7xJCs"),
            soundcloud("vinxis-emeskey-nostalgia"),
            bandcamp("nostalgia-feat-emeskey"),
            spotify("0R617kgT8SBboHXlXqnl2o"),
            apple("1434341206"),
        ],
    },
    {
        title: "Take",
        genre: "Drum and Bass / Drumstep",
        length: "5:58",
        year: 2016,
        links: [
            youtube("2EtkxNE_2Ag"),
            soundcloud("take"),
            bandcamp("take"),
            spotify("7CYp4VIgykATjhKqyUyh0O"),
            apple("1344405182"),
        ],
    },
    {
        title: "Left Behind",
        genre: "Drum and Bass",
        length: "2:33",
        year: 2016,
        links: [
            youtube("KjqFrZvqqh4"),
            soundcloud("left-behind"),
            bandcamp("left-behind"),
            spotify("64fGzCIXZHWZTxl1NGfZPW"),
            apple("1344562134"),
        ],
    },
    {
        title: "Three Times The Original Charm",
        genre: "Downtempo",
        length: "3:52",
        year: 2015,
        links: [
            youtube("hkSytekVwfM"),
            soundcloud("three-times-the-original-charm"),
            bandcamp("three-times-the-original-charm"),
            spotify("0ruEuHEcEIRqns0ZKGeiLE"),
            apple("1346223158"),
        ],
    },
    {
        title: "Applause",
        genre: "Electronic",
        length: "1:06",
        year: 2015,
        links: [
            youtube("bj7gFQ4XzBU"),
            soundcloud("applause"),
            bandcamp("applause"),
            spotify("7kODgYR50TGRFUndVaKTQE"),
            apple("1409295678"),
        ],
    },
    {
        title: "The Side Effects Of Mental Paralysis",
        genre: "Glitch",
        length: "2:50",
        year: 2015,
        links: [soundcloud("the-side-effects-of-mental-paralysis")],
    },
    {
        title: "A Centralized View",
        genre: "Drum and Bass",
        length: "2:31",
        year: 2015,
        links: [
            youtube("K5UL_RxK0lk"),
            soundcloud("a-centralized-view"),
        ],
    },
    {
        title: "Greetings",
        genre: "Drum and Bass",
        length: "1:18",
        year: 2015,
        links: [
            youtube("R9hsAmo2Gho"),
            soundcloud("greetings"),
        ],
    },
    {
        title: "Blissful Murder",
        genre: "Hardcore / Gabber",
        length: "3:13",
        year: 2014,
        links: [
            youtube("E3ZDL1cmciI"),
            soundcloud("blissful-murder"),
        ],
    },
    {
        title: "Black Dust",
        genre: "Orchestral",
        length: "2:45",
        year: 2014,
        links: [
            youtube("Yqp099-vu3g"),
            soundcloud("vinxis-black-dust"),
        ],
    },
    {
        title: "Reach the Dreams (w. Emeskey)",
        genre: "Chillout",
        length: "4:37",
        year: 2014,
        links: [
            youtube("JuUs0R0XeR0"),
            soundcloud("vinxis-emeskey-reach-the"),
            bandcamp("reach-the-dreams"),
        ],
    },
    {
        title: "Vole",
        genre: "Experimental",
        length: "2:55",
        year: 2013,
        links: [
            youtube("CDizagF4vEc"),
            soundcloud("vole"),
        ],
    },
];
  