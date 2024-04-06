---
title: "Android CTF Juicy Bar::Hardcoded Secrets"
date: "2024-04-06"
lastmod: "2024-04-06"
tags: ['Android Security', 'Juicy Bar', 'Reverse Engineering', 'Writeup']
draft: false
summary: "This article is a write-up of the Hardcoded Secrets challenge in the Android CTF Juicy Bar."
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default']
layout: PostLayout
canonicalUrl: https://ad2001.com/blog/juicy-bar-hardcoded-secrets

---

Hey all,

Let's continue with the walkthrough of the juicy bar CTF Application.

https://juicy.barsk.xyz/

## Challenge

Today we will be solving the Hardcoded secrets challenge. We have to find three flags to complete this challenge. Let's start with the first flag.

### Flag One

![](/static/images/posts/Hardcoded/1.png)

The hint says to look for the api keys in the resources.

Most of these string values including keys will be defined in the string resource file. Let's take a look there.

![](/static/images/posts/Hardcoded/2.png)

Now let's search for api.

![](/Users/ajindeepak/Desktop/BLOGS/JuicyBar/Hardcoded Secrets/Images/3.png)

Let's try validing the value for the api_key_server_key.

![](/static/images/posts/Hardcoded/3.png)

If you check the logcat you should have received the first flag. Now let's first the second flag.

### Flag Two

Let's check the hints.

![](/static/images/posts/Hardcoded/4.png)

The hint says to look for an encryption key in the assets folder. Let's do that.

![](/static/images/posts/Hardcoded/5.png)

If you go through the folders in the assets , you will easily get the key. Let's try that.

![](/static/images/posts/Hardcoded/6.png)

Okay we got the second flag now. Let's complete this thing by finding the third flag.

### Flag Three

Let's check for the hints again.

![](/static/images/posts/Hardcoded/7.png)

The hint suggests it's a token commonly used in web applications, probably a JWT token. Let's examine the decompiled code in the HardcodedSecrets class.

![](/static/images/posts/Hardcoded/8.png)

This indeed looks like a jwt token.

```
System.out.println((Object) "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJhZ2UiOjQyLCJ1c2VybmFtZSI6ImpvaG40MiIsInBhc3N3b3JkIjoiaGNfc2VjX3Vuc2FmZV9qd3QifQ.ym7jNSXpVEO5c07lLzp-hlgqm5YRuGtHZrODr4rnayI");
```

Let's paste this into https://jwt.io/

![](/static/images/posts/Hardcoded/9.png)

So the secret is 'hc_sec_unsafe_jwt'. Let's try validating this in our app.

![](/static/images/posts/Hardcoded/10.png)

Yay we got final flag. So we have completed the hardcoded secrets challenge. Congrats :)