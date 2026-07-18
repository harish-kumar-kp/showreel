// 25 unique sample video sources (public domain / Google's public test bucket + MDN/samplelib demos).
  // Thumbnails are generated placeholders (numbered) since these public demo clips don't ship official posters.
  // Replace src/thumb on any entry with your own files or links as needed.
  const videos = [
    {
      title: "SPRING -Short",
      src: "https://video.blender.org/download/web-videos/3d95fb3d-c866-42c8-9db1-fe82f48ccb95-804.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/3d95fb3d-c866-42c8-9db1-fe82f48ccb95.jpg"
    },
    {
      title: "Sintel -Short.",
      src: "http://peach.themazzone.com/durian/movies/sintel-2048-surround.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHyqEeO_d66wHHlyGLtZ_0rGfQegfnZgxfqQ&s",
      subtitle: "https://raw.githubusercontent.com/harish-kumar-kp/showreel/main/VIdOTT/subtitles/Sintel(2010).eng.srt"
    },
   {
      title: "Making-Sintel -Doc.",
      src: "https://video.blender.org/download/web-videos/6a12c7a4-6c0f-46db-a5fd-e212a83661f8-720.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHyqEeO_d66wHHlyGLtZ_0rGfQegfnZgxfqQ&s"
    },
    {
      title: "Big Buck Bunny -Short",
      src: "https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_h264.mov",
      thumb: "https://i1.sndcdn.com/artworks-000005011281-9brqv2-t1080x1080.jpg"
    },
    {
      title: "Cosmos Laundromat -Short",
      src: "https://studio.blender.org/download-source/files/9e/9e18c8684db6ae04cc458477554f2976062f4d9d/9e18c8684db6ae04cc458477554f2976062f4d9d.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/f507dfdc-e73e-45a4-9778-d758cbe1ce96.jpg",
      subtitle: "https://raw.githubusercontent.com/harish-kumar-kp/showreel/main/VIdOTT/subtitles/Cosmos_Laundromat_First_Cycle_(2015)_.minitoons._.EN.srt"
    },
    {
      title: "Agent 327: Operation Barbershop -Short",
      src: "https://video.blender.org/download/web-videos/264ff760-803e-430e-8d81-15648e904183-804.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/264ff760-803e-430e-8d81-15648e904183.jpg",
      subtitle: "https://raw.githubusercontent.com/harish-kumar-kp/showreel/main/VIdOTT/subtitles/Agent%20327.%20Operation%20Barbershop%20(2017)%20-%20EN%20.720p.%20-%20.minitoons.srt"
    },
    {
      title: "Sprite Fright -Short",
      src: "https://video.blender.org/download/web-videos/a69d68a5-a0e0-4a80-9d66-49f093c97aaf-804.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/ff105d09-ca07-4128-b5f7-6e25351bb899.jpg",
      subtitle: "https://raw.githubusercontent.com/harish-kumar-kp/showreel/main/VIdOTT/subtitles/SpriteFright_en.srt"
    },
    {
      title: "Charge -Short",
      src: "https://video.blender.org/download/web-videos/04da454b-9893-4184-98f3-248d00625efe-1080.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/0dd54e62-2ae7-4db9-8144-4da805fbe4ba.jpg"
    },
    {
      title: "Making-Charge -Doc.",
      src: "https://video.blender.org/download/web-videos/d06afb85-ecea-4df6-be75-005a7954a93c-1080.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/da8a3e07-dd59-4a14-adfa-b5e3ae65cb8c.jpg"
    },
   {
      title: "Caminandes:Llama Drama -Short",
      src: "https://video.blender.org/download/web-videos/fb70d459-48d2-4db5-adba-813c84f9200a-1080.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/fb70d459-48d2-4db5-adba-813c84f9200a.jpg"
    },
   {
      title: "Caminandes:Llamigos -Short",
      src: "https://video.blender.org/download/web-videos/23f3ef79-15dc-44c5-aa45-cf92e78a4509-1080.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/23f3ef79-15dc-44c5-aa45-cf92e78a4509.jpg"
    },
   {
      title: "Making -Caminandes: Llamigos -Doc.",
      src: "https://video.blender.org/download/web-videos/515fa4ff-7038-42a3-9e1b-ef7154bd7398-1080.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/eb768a62-cd22-4fba-80a8-4652bf6238ba.jpg"
    },
   {
      title: "Heros -Short",
      src: "https://video.blender.org/download/web-videos/3eb93cab-79a2-4fd5-a636-d42e5c59ddea-536.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/8d2a64e7-089c-4ad5-a676-7eec5e51f7c0.jpg"
    },
   {
      title: "WingIt -Short",
      src: "https://video.blender.org/download/web-videos/bd0084a5-1d26-4816-ab5e-1bad9e2fb990-1080.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/4efa0a16-83b0-4c62-a4bc-4dcd30c05749.jpg"
    },
   {
      title: "Singularity -Short",
      src: "https://crystalstream.mk16.de/static/redundancy/hls/1ba07bbb-1456-4293-99a6-833fa450eda0/903ba2a3-74ae-4ebd-83f5-c6e5c3e245ee-1080-fragmented.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/38b6e48a-40e7-4c46-801f-9a46baf9c02a.jpg"
    },
   {
      title: "Making-Singularity -Doc.",
      src: "https://video.blender.org/videos/embed/pT59NDdBRLHX3zmnvGNm9c",
      thumb: "https://video.blender.org/lazy-static/thumbnails/3d61fdb7-28d4-4e9e-8b44-2225fcd04e35.jpg"
    },
   {
      title: "Glass Half -Short",
      src: "https://video.blender.org/download/web-videos/64222c8a-c4c7-4b3b-9850-7fb2078edcf6-1080.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/64222c8a-c4c7-4b3b-9850-7fb2078edcf6.jpg"
    },
   {
      title: "The Daily Dweebs -Short",
      src: "https://video.blender.org/download/web-videos/7b2eff2a-35f2-4403-9d88-d0dd6e4b5ba1-1080.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/7b2eff2a-35f2-4403-9d88-d0dd6e4b5ba1.jpg"
    },
   {
      title: "Coffee Run -Short",
      src: "https://video.blender.org/download/web-videos/ff8fe61b-026f-4f07-b66b-2a790d6f6ab1-804.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/ff8fe61b-026f-4f07-b66b-2a790d6f6ab1.jpg"
    },
   {
      title: "Elephants Dream -Short",
      src: "https://video.blender.org/download/web-videos/cccc3e60-0291-4ecc-aa56-39b2e2c7d0d5-720.mp4",
      thumb: "https://video.blender.org/lazy-static/thumbnails/cccc3e60-0291-4ecc-aa56-39b2e2c7d0d5.jpg"
    },
    {
      title: "Tears of Steel -Short",
      src: "https://video.blender.org/object-storage/web_videos/8533ea43-4271-4a57-9694-e9d0b35e1aa1-800.mp4",
      thumb: "https://m.media-amazon.com/images/S/pv-target-images/ac878c08d94a3da94048c54c4585013f2c7672c33ef5236307eba9fb8ae96d38.png"
    },
     {
      title: "TearsOfSteel-4k -Short",
      src: "https://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/tears_of_steel_surround.webm",
      thumb: "https://m.media-amazon.com/images/S/pv-target-images/ac878c08d94a3da94048c54c4585013f2c7672c33ef5236307eba9fb8ae96d38.png"
    },
    {
      title: "Snow White and the Seven Dwarfs 1937",
      src: "https://dn720203.ca.archive.org/0/items/snow-white-and-the-seven-dwarfs-1937_202404/Snow%20White%20and%20the%20Seven%20Dwarfs%20%281937%29.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShSDpKN_qs_cn86LpWBgYO8iUTIiMLeC_Kk8mQWMVFA&s=10"
    },
    {
      title: "Peter Pan - 1953",
      src: "https://archive.org/download/the-three-caballeros-1996-vhs_20220516/Peter%20Pan%20%282007%20DVD%29.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggHIj-GHzI9FrNQ5CBmXPzIX7WDbHU42OErqgxQUHR220WUw7fQyrQVI&s=10"
    },
    {
      title: "Gullivers Travel 1939",
      src: "https://archive.org/download/gullivers_travels_1080hd/gullivers_travels_1080hd.mkv",
      thumb: "https://i.ytimg.com/vi/mySEPPEifnk/hq720.jpg"
    },
    {
      title: "101 Dalmations 1961",
      src: "https://dn601206.us.archive.org/0/items/101-dalmatians-1992-vhs-french-canadian-copy_202301/101%20Dalmatians%20%281961%29.mp4",
      thumb: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/107227da-8d58-4c16-9577-439257f1ea53/compose?aspectRatio=1.78&format=webp&width=1200"
    },
    {
      title: "Alladin 1992",
      src: "https://dn601206.us.archive.org/0/items/101-dalmatians-1992-vhs-french-canadian-copy_202301/Aladdin%20%282015%20DVD%29.mp4",
      thumb: "https://i.ytimg.com/vi/ShwFa6MPgGE/maxresdefault.jpg"
    },
    {
      title: "Sword in The Stone 1992",
      src: "https://dn720302.ca.archive.org/0/items/the-three-caballeros-1996-vhs_20220516/The%20Sword%20in%20the%20Stone%20%282008%20DVD%29.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpw3jyyTMlt_ojGfxUvTohiRltFQfaiSbfVBwdpnFW6e9Lc7VGIk5PeI&s=10"
    },
    {
      title: "Fantasia - Special Edition",
      src: "https://archive.org/download/fantasia-special-edition-laserdisc-restoration-with-sunflower-v-1.0/Fantasia_Special_Edition_Laserdisc_Restoration_with_Sunflower_v1.0.mp4",
      thumb: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b399f-91c8-7e57-b452-6df1d4a12dfc/compose?aspectRatio=1.78&format=webp&width=1200"
    },
    {
      title: "Ant Bully 2006",
      src: "https://dn710205.ca.archive.org/0/items/Popcornarchive-theAntBully2006_ta993/Popcornarchive-theAntBully2006_ta993.mp4",
      thumb: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCfIGyLH5R370nQP9fd7v-phlbfTVUiQ7fysbChopGayaepPGfxuV1fjPujG2yABlz2ZiFc8dG_-68-uJacdhSbKIw8_Wzoa5PcEGcgQ2c7GEO59Iw8Nh-iKwH1La3OfBpkJeykskOEbPG_ZHGuXC_4Ao6GB_EING3GkAUq2lEJvlG_cn1IRq7zzuklPk/s1395/Screencap%201.png"
    },
    {
      title: "Dunston Checks In 1996",
      src: "https://dn721901.ca.archive.org/0/items/Popcornarchive-dunstonChecksIn1996/Popcornarchive-dunstonChecksIn1996.mp4",
      thumb: "https://m.media-amazon.com/images/S/pv-target-images/318ccb307fe9021f36adf9cd36c520d04d0a64aa594088c66741a770549e2ff2.png"
    },
    {
      title: "Lassie 2005",
      src: "https://dn710005.ca.archive.org/0/items/Popcornarchive-lassie2005/Popcornarchive-lassie2005.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0NopiAonxnjlUoG0zl2073l-B6jTuWGbIAqht8kBsPTqJQD7FJYyQAwQ&s=10"
    },
    {
      title: "Mask 1994",
      src: "https://archive.org/download/the-mask-vhs-1995-1996/The%20Mask%20VHS%201995%20%281996%29.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyri5fIjghGEykuu2-hiIEK0GsNkWRUX_Am8jbkn5SQ&s=10"
    },
    {
      title: "The Gods Must Be Crazy",
      src: "https://dn710609.ca.archive.org/0/items/the.-gods.-must.-be.-crazy.-1980.-hdrip.-xvi-d.-b-4-nd-1-t-69/The.Gods.Must.Be.Crazy.1980.HDRip.XviD.B4ND1T69.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8fRfjMCydTBBdFOk8cstgUX-dXed2LjVqRgR8zI9vEuY6XsDAeuF66wt&s=10",
      subtitle: "https://raw.githubusercontent.com/harish-kumar-kp/showreel/main/VIdOTT/subtitles/The.Gods.Must.Be.Crazy.1984.srt"
    },
    {   
      title: "The Gods Must Be Crazy 2",
      src: "https://dn710008.ca.archive.org/0/items/Popcornarchive-theGodsMustBeCrazy21989/Popcornarchive-theGodsMustBeCrazy21989.mp4",
      thumb: "https://californiaherps.com/films/filmimages/godsmustbecrazyII.jpg",
      subtitle: "https://raw.githubusercontent.com/harish-kumar-kp/showreel/main/VIdOTT/subtitles/The%20Gods%20Must%20Be%20Crazy%20II%20(1989).srt"
    },
    {
      title: "The Gods Must Be Crazy3",
      src: "https://dn721605.ca.archive.org/0/items/GodsMustBeCrazy3CrazySafari/Gods%20Must%20Be%20Crazy%203%20-%20Crazy%20Safari.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMugptVH1zegCveYbzUmrUjwCsbBq7WONVTls1B0gHkbv5N61zrT-S5k&s=10"
    },
    {
      title: "The Gods Must Be Crazy4",
      src: "https://dn710902.ca.archive.org/0/items/GodsMustBeCrazy4CrazyHongKong/Gods%20Must%20Be%20Crazy%204%20-%20Crazy%20Hong%20Kong.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvenMPjU-a11MY4NMbFEKL_UKHXxJMvW7w9awMlQqPQ&s=10"
    },
    {
      title: "Guns of Neverone",
      src: "https://ia801704.us.archive.org/34/items/the-guns-of-navarone-1961_202511/The%20Guns%20of%20Navarone%20%281961%29/mp4/The%20Guns%20of%20Navarone%20-%201961.mp4",
      thumb: "https://i.etsystatic.com/55580460/r/il/647ba1/7051860689/il_794xN.7051860689_8lvv.jpg"
    },
    {
      title: "Jason and the Argonauts",
      src: "https://archive.org/download/jason-and-the-argonauts-1963/Jason%20and%20the%20Argonauts%20%281963%29.m4v",
      thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Jason_and_the_argounauts.jpg/250px-Jason_and_the_argounauts.jpg"
    },
    {
      title: "Romancing-the-stone-1984",
      src: "https://archive.org/download/romancing-the-stone-1984-directed-by-robert-zemeckis/asa-%F0%9F%8E%A5%F0%9F%93%BD%F0%9F%8E%AC-romancing-the-stone-1984-directed-by-robert-zemeckis-with-michael-douglas-kathleen-turner-danny-devito-alfonso-arau-givefastlink.mp4",
      thumb: "https://m.media-amazon.com/images/S/pv-target-images/d0daf9f102b78e731fb2c1f6444fc15fdf09fe37b3ec806745d87be5e5918f2a.jpg"
    },
    {
      title: "The. Jewel Of The Nile 1985",
      src: "https://archive.org/download/s-the.-jewel.-of.-the.-nile.-1985/S-The.Jewel.Of.The.Nile.1985.mp4",
      thumb: "https://image.tmdb.org/t/p/original/og5qj3KTctBLer1oktVbyIN5zrt.jpg"
    },
    {
      title: "The Pink Panther 1963",
      src: "https://archive.org/download/ThePink.Panther1963/The%20Pink.%20Panther%201963.mp4",
      thumb: "https://i.ytimg.com/vi/R4amWTwO1GM/maxresdefault.jpg"
    },

    {
      title: "Where Eagles Dare",
      src: "https://archive.org/download/1968-where-eagles-dare/1968%20Where%20Eagles%20Dare.mp4",
      thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Where_Eagles_Dare_poster.jpg/250px-Where_Eagles_Dare_poster.jpg"
    },
    {
      title: "The Bridge on the River Kwai (1957)",
      src: "https://archive.org/download/the-bridge-on-the-river-kwai-1957_202511/The%20Bridge%20on%20the%20River%20Kwai%20%281957%29/The%20Bridge%20on%20the%20River%20Kwai%20-%201957.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQ-1fJjQ3nLMORW5Ek8NG08zyzqdxPLUwh7PM30eBkgDk1E6nF3y1LYOj&s=10"
    },
    {
      title: "Captain Sindbad (1963)",
      src: "https://archive.org/download/Captain.Sindbad.1963.DVDRip/Captain.Sindbad.1963.DVDRip.mp4",
      thumb: "https://m.media-amazon.com/images/S/pv-target-images/069507013f9eab7830db9174291bdcfb32555b009f1858566aec1f60ec734b90.jpg"
    },
    {
      title: "Cleopetra 1963",
      src: "https://dn760104.eu.archive.org/0/items/cleopatra-1963_202511/Cleopatra%20%281963%29/Cleopatra%20-%201963.mp4",
      thumb: "https://m.media-amazon.com/images/S/pv-target-images/fcc2c0af3158e86db884a6921b8420b113d14f24e701ac071ab44ef1578caba4.jpg"
    },
    {
      title: "5 Men Army 1969",
      src: "https://archive.org/download/1969-un-esercito-di-5-uomini-ext/%5B1969%5D%20Un%20Esercito%20di%205%20Uomini%20%28ext%29.mp4",
      thumb: "https://tobrien10.wordpress.com/wp-content/uploads/2018/10/the-five-man-army.jpg"
    },
    {
      title: "Mackenna's Gold 1969",
      src: "https://archive.org/download/mackennas-gold-1969-bg-sub/Mackenna%27s%20Gold%281969%29%20bg%20sub.mp4",
      thumb: "https://i.ytimg.com/vi/vRnzCQLZJoM/mqdefault.jpg"
    },
    {
      title: "Soylent Green 1973",
      src: "https://archive.org/download/soylent-green-1973_202512/Soylent%20Green%20%281973%29.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pNBZJqwHDhz2E8RJ0RSi8tSepgKfnUgXvcO5O32ufQ&s=10"
    },
   {
      title: "Planet of the Apes",
      src: "http://www.deadlyblogger.com/NewRelease/apes1.mp4",
      thumb: "https://www.filmsite.org/featured/movie-fr-planetofapes.jpg"
    },
    {
      title: "Logan's Run 1976",
      src: "https://archive.org/download/soylent-green-1973_202512/Logan%27s%20Run.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSgShhZ3lxwki8d4orFHucGiH3Fu3uAPEzuYh7LGuCl-M1fir8IU7lDM&s=10"
    },
    {
      title: "Maya 1966",
      src: "https://archive.org/download/maya-1966-o-vale-dos-tigres-cover-dvd/1966%20-%20Maya%20-%20O%20Vale%20dos%20Tigres.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtl1eKMehM2IRQ8kIwoRovg805lGdqY9IpG0GhWWivlQ&s=10"
    },
    {
      title: "Breakfast At Tiffanys 1961",
      src: "https://archive.org/download/breakfast-at-tiffanys-1961_202508/Breakfast%20at%20Tiffany%27s%20%281961%29.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROx7IwqAiW_GcnMuQgEI2et-dZP_KGBxk0hIxPY5zPrA&s=10"
    },
    {
      title: "Shinning 1980",
      src: "https://dn721904.ca.archive.org/0/items/PopcornArchive-._u7eat/PopcornArchive-._u7eat.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFh404dm8ntHtFAylPdGhOV-CO7M2yBhG44Tvm0NRHPWA73LvKD-BuHGI&s=10"
    },
    {
      title: "Big Trouble In Little China 1986",
      src: "https://archive.org/download/big-trouble-little-china/Big%20Trouble%20In%20Little%20China%20720p.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iz342MTgd5TQyD2aqky8eTQ8zYmbynsJveD6rd2ht0aXjnSwC4Z6Ybal&s=10"
    },
    {
      title: "Silver Bullet 1985",
      src: "https://dn721809.ca.archive.org/0/items/Popcornarchive-silverBullet1985/Popcornarchive-silverBullet1985.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uXoBqfpdH3qWpsDQrWPWlCMm4W5uhiHm9fOJsyPDfw&s=10"
    },
    {
      title: "TrueLies 1994",
      src: "https://archive.org/download/true-lies-1994-d-theater/True%20Lies%20%281994%29%20%5BD-Theater%5D.mp4",
      thumb: "https://m.media-amazon.com/images/S/pv-target-images/7f1febf752aba2f8e392247717048c68eb8d64f5a05ddcae893f039d6383c164.png"
    },
    {
      title: "The Secret of NIMH (1982)",
      src: "https://archive.org/download/the-secret-of-nimh-1982_202511/The%20Secret%20Of%20NIMH%20%281982%29/mp4/The%20Secret%20of%20NIMH%201982.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24m6NroPJzev5KgjtWQclP1lZAfIYIvYJqcpt0dQUDA&s=10"
    },

    {
      title: "National Treasure Book of Secrets 2007",
      src: "https://archive.org/download/National.Treasure.Book.of.Secrets.2007.720p.BrRip.x264.YIFY/National.Treasure.Book.of.Secrets.2007.720p.BrRip.x264.YIFY.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiys5p8VSIyvqJgIkxbkH8AdQ_o005sT9sNjmj_f6nhtenXDdgCFceX8w&s=10"
    },
    {
      title: "Vertical Limit 2000",
      src: "https://dn710003.ca.archive.org/0/items/live.-free.or.-die.-hard.-2007.-h-265.1080p.-dvdrip.-ezz-rips/Vertical.Limit.%282000%29.H265.1080p.DVDRip.EzzRips/Vertical.Limit.%282000%29.H265.1080P.Dvdrip.Ezzrips.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaradMxoriUb63yKZA2wQlmnuTaycy0IbYZdo0oIy_g&s=10"
    },
    {
      title: "Deep Blue Sea 2007",
      src: "https://dn710003.ca.archive.org/0/items/live.-free.or.-die.-hard.-2007.-h-265.1080p.-dvdrip.-ezz-rips/Deep.Blue.Sea.%281999%29.H265.1080p.DVDRip.EzzRips/Deep.Blue.Sea.%281999%29.H265.1080P.Dvdrip.Ezzrips.mp4",
      thumb: "https://static0.srcdn.com/wordpress/wp-content/uploads/2022/07/Split-image-of-characters-and-sharks-from-Deep-Blue-Sea.jpg?q=50&fit=crop&w=360&h=240&dpr=1.5"
    },
    {
      title: "Gone In Sixty Seconds 2000",
      src: "https://dn710003.ca.archive.org/0/items/live.-free.or.-die.-hard.-2007.-h-265.1080p.-dvdrip.-ezz-rips/Gone.in.60.Seconds.%282000%29.H265.1080p.DVDRip.EzzRips/Gone.In.Sixty.Seconds.%282000%29.H265.1080P.Dvdrip.Ezzrips.mp4",
      thumb: "https://i.ytimg.com/vi/kEbu0mqylT4/maxresdefault.jpg"
    },
    {
      title: "Aeroplanes! 1980",
      src: "https://dn710003.ca.archive.org/0/items/live.-free.or.-die.-hard.-2007.-h-265.1080p.-dvdrip.-ezz-rips/Airplane%21.%281980%29.H265.1080p.DVDRip.EzzRips/Airplane%21.%281980%29.H265.1080P.Dvdrip.Ezzrips.mp4",
      thumb: "https://i.ytimg.com/vi/n9MK9F2RZww/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDuXLIBhe1YCyG46EyG-aoctMje9A"
    },
    {
      title: "UHF 1989",
      src: "https://archive.org/download/uhf.-1989/UHF%20%281989%29/mp4/UHF.1989.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3ABbHBA9pJeyqDeMdrKNQmSi9vhkQnUJfDyvSz-hUYB0pGDf-fbGDb0&s=10"
    },
    {
      title: "Spaceballs 1987",
      src: "https://archive.org/details/spaceballs-1987-mel-brooks-vhs-film",
      thumb: "https://ccapp.osu.edu/sites/default/files/styles/news_and_events_image/public/2022-11/event_spaceballs_0.jpg?h=d1cb525d&itok=6elScADy"
    },
   {
      title: "UHF 1989",
      src: "https://archive.org/download/uhf.-1989/UHF%20%281989%29/mp4/UHF.1989.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3ABbHBA9pJeyqDeMdrKNQmSi9vhkQnUJfDyvSz-hUYB0pGDf-fbGDb0&s=10"
    },

     {
      title: "Memanto 2000",
      src: "https://archive.org/download/memento.-2000.1080p.-blu-ray.x-264.-yify/Memento.2000.1080p.BluRay.x264.YIFY.mp4",
      thumb: "https://images.mubicdn.net/images/artworks/172703/cache-172703-1621560129/images-original.png"
    },
    {
      title: "Fight Club 1999",
      src: "https://archive.org/download/fight.club.10th.anniversary.edition.1999.1080p.brrip.x264.yify_201908/Fight.Club.10th.Anniversary.Edition.1999.1080p.BrRip.x264.YIFY.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ8mkKoJe2HsPyvU-T4qcPqotA3ydCx3QaHqgUe4LkvEX7iRYNJVo4lw&s=10"
    },
    {
      title: "3000 Miles To Graceland 2001",
      src: "https://archive.org/download/3000-miles-to-graceland-2001/3000%20Miles%20to%20Graceland%20%282001%29.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSujRLI-i15bBspW9ZiLENq1YpzKB0oeJG9NEdgXlZg&s"
    },
    {
      title: "Flatliners 1990",
      src: "https://archive.org/download/flatliners-1990/Flatliners%20%281990%29/Flatliners%20-%201990.mp4",
      thumb: "https://miro.medium.com/1*8ETieBYfLrbJ38EiuDuNqQ.jpeg"
    },
    {
      title: "RoboCop 1987",
      src: "https://archive.org/download/robocop-1987_202311/Robocop%201987.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFDFdIHUzXVRa2O9CaLGWXKIjYdyi18eLz0GzRv2NS0ASq0inlJZmCpSF-&s=10"
    },
    {
      title: "RoboCop2 1990",
      src: "https://archive.org/download/robocop-1987_202311/Robocop%202.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYKrF2GUw134lA1prcgpdU0qkyDG9vkllmMovY-4xy633O87KztwYzKOe8&s=10"
    },
    {
      title: "RoboCop3 1993",
      src: "https://archive.org/download/robocop-1987_202311/Robocop%203.mp4",
      thumb: "https://m.media-amazon.com/images/S/pv-target-images/0ed3f3c58d1c129e564760b4cf0cfd44daf5bdf66f72b25fb323f7fbe37a9580.jpg"
    },
    {
      title: "Robocop 2014",
      src: "https://archive.org/download/robocop-1987_202311/Robocop%202014.mp4",
      thumb: "https://i.ytimg.com/vi/XRMh0V8DBv0/mqdefault.jpg"
    },
	{
      title: "Walking-with-Dinosaurs-Ep01",
      src: "https://archive.org/download/walking-with-dinosaurs/Episode%201%20-%20New%20Blood.mp4",
      thumb: "https://i.ebayimg.com/images/g/Fn8AAOSwHnFV3gUn/s-l960.webp"
    },
    {
      title: "Walking-with-Dinosaurs-Ep02",
      src: "https://archive.org/download/walking-with-dinosaurs/Episode%202%20-%20A%20Time%20of%20the%20Titans.mp4",
      thumb: "https://i.ebayimg.com/images/g/Fn8AAOSwHnFV3gUn/s-l960.webp"
    },
    {
      title: "Walking-with-Dinosaurs-Ep03",
      src: "https://archive.org/download/walking-with-dinosaurs/Episode%203%20-%20Cruel%20Sea.mp4",
      thumb: "https://i.ebayimg.com/images/g/Fn8AAOSwHnFV3gUn/s-l960.webp"
    },
    {
      title: "Walking-with-Dinosaurs-Ep04",
      src: "https://archive.org/download/walking-with-dinosaurs/Episode%204%20-%20Giant%20of%20the%20Skies.mp4",
      thumb: "https://i.ebayimg.com/images/g/Fn8AAOSwHnFV3gUn/s-l960.webp"
    },
    {
      title: "Walking-with-Dinosaurs-Ep05",
      src: "https://archive.org/download/walking-with-dinosaurs/Episode%205%20-%20Spirits%20of%20the%20Ice%20Forest.mp4",
      thumb: "https://i.ebayimg.com/images/g/Fn8AAOSwHnFV3gUn/s-l960.webp"
    },
    {
      title: "Walking-with-Dinosaurs-Ep06",
      src: "https://archive.org/download/walking-with-dinosaurs/Episode%206%20-%20Death%20of%20a%20Dynasty.mp4",
      thumb: "https://i.ebayimg.com/images/g/Fn8AAOSwHnFV3gUn/s-l960.webp"
    },
	{
      title: "Walking with Beast -Ep01",
      src: "https://archive.org/download/walking-with-beasts/Walking%20With%20Beasts%20Ep%201%20-%20New%20Dawn.mp4",
      thumb: "https://i.ytimg.com/vi/S46Qd3ypMMM/sddefault.jpg"
    },
    {
      title: "Walking with Beast -Ep02",
      src: "https://archive.org/download/walking-with-beasts/Walking%20With%20Beasts%20Ep%202%20-%20Whale%20Killer.mp4",
      thumb: "https://i.ytimg.com/vi/S46Qd3ypMMM/sddefault.jpg"
    },
    {
      title: "Walking with Beast -Ep03",
      src: "https://archive.org/download/walking-with-beasts/Walking%20With%20Beasts%20Ep%203%20-%20Land%20of%20Giants.mp4",
      thumb: "https://i.ytimg.com/vi/S46Qd3ypMMM/sddefault.jpg"
    },
    {
      title: "Walking with Beast -Ep04",
      src: "https://archive.org/download/walking-with-beasts/Walking%20With%20Beasts%20Ep%204%20-%20Next%20of%20Kin.mp4",
      thumb: "https://i.ytimg.com/vi/S46Qd3ypMMM/sddefault.jpg"
    },
    {
      title: "Walking with Beast -Ep05",
      src: "https://archive.org/download/walking-with-beasts/Walking%20With%20Beasts%20Ep%205%20-%20Sabre%20Tooth.mp4",
      thumb: "https://i.ytimg.com/vi/S46Qd3ypMMM/sddefault.jpg"
    },
    {
      title: "Walking with Beast -Ep06",
      src: "https://archive.org/download/walking-with-beasts/Walking%20With%20Beasts%20Ep%206%20-%20Mammoth%20Journey.mp4",
      thumb: "https://i.ytimg.com/vi/S46Qd3ypMMM/sddefault.jpg"
    },  
    {
      title: "Coffee Cup",
      src: "https://samplelib.com/preview/mp4/sample-5s.mp4",
      thumb: "https://thumbs.dreamstime.com/b/cup-cofee-2927130.jpg"
    },
    {
      title: "Sintel Trailer",
      src: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHyqEeO_d66wHHlyGLtZ_0rGfQegfnZgxfqQ&s"
    },
    {
      title: "Bunny Trailer",
      src: "https://media.w3.org/2010/05/bunny/trailer.mp4",
      thumb: "https://i1.sndcdn.com/artworks-000005011281-9brqv2-t1080x1080.jpg"
    },
    {
      title: "Happy Feet 2",
      src: "https://html5videoformatconverter.com/data/images/happyfit2.mp4",
      thumb: "https://c8.alamy.com/comp/F6KH5T/release-date-november-17-2006-movie-title-happy-feet-director-george-F6KH5T.jpg"
    }
  ];
