// Har bir ijtimoiy tarmoq uchun linklar ro'yxati
const socialLinks = {
    telegram: "",
    instagram: "",
    youtube: "",
    facebook: "",
    linkedin: "",
    website: ""
  };

  // DOM tayyor bo‘lishini kutamiz
  document.addEventListener("DOMContentLoaded", () => {
    console.log("GITHUB");
    
    // Har bir linkni alohida ulaymiz
    document.querySelector(".telegram_link").href = socialLinks.telegram;
    document.querySelector(".instagram_link").href = socialLinks.instagram;
    document.querySelector(".youtube_link").href = socialLinks.youtube;
    document.querySelector(".facebook_link").href = socialLinks.facebook;
    document.querySelector(".linkedin_link").href = socialLinks.linkedin;
    document.querySelector(".website_link").href = socialLinks.website;
  });
