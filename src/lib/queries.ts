export const heroQuery = ` *[_type == "hero"]{
  _id,
  intro, 
  "imageUrl": heroImage.asset->url 
  }`;

export const aboutQuery = ` *[_type == "about"]{
  _id,
  intro,
  "image": image.asset -> url,
  "cv": cv.asset -> url,
  features []{
    _key,
    title,
    description,
    "image":image.asset->url
  }
  }`;

export const projectQuery = `*[_type == "project"]{
  _id,
  title,
  description,
  type,
  projectUrl,
  codeUrl,
  "slug":slug.current,
  "imageUrl": imageUrl.asset -> url
  }`;

export const skillQuery = `*[_type == "skill"]{
  _id,
  name,
  color,
  "logo":image.asset -> url
}`;

export const qualificationQuery = `*[_type=='qualification']{
  _id,
  experience,
  education
}`;
