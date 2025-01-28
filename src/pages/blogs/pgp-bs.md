---
title: "Using PGP and Tor for Journalistic Privacy"
date: "2025-01-26"
tags: ["pgp", "tor", "journalism", "privacy", "security"]
description: "A step-by-step guide for journalists on using PGP encryption and Tor for secure and private communications. Learn how to safeguard sensitive information, protect sources, and maintain anonymity online."
image: "lock_on_file.webp"
---
## **PGP and Tor: A Secure Guide for Journalists**

### **1. What is PGP?**
PGP (Pretty Good Privacy) is an encryption standard used to encrypt and sign digital communications. It ensures:
- **Confidentiality:** Only intended recipients can read your messages.
- **Integrity:** Ensures the message has not been tampered with.
- **Authentication:** Confirms that the message comes from the claimed sender.

PGP is vital for journalists exchanging sensitive information with sources.

---

### **2. Why Combine PGP with Tor?**
Tor anonymizes your internet traffic, making it harder for third parties to track your online activities. Using Tor with PGP adds an additional layer of privacy:
- Tor anonymizes your network traffic.
- PGP ensures your communications remain secure, even if intercepted.

---

### **3. Tools You Need**
Before starting, install these tools:
1. **Tor Browser** (for anonymized browsing): [Download here](https://www.torproject.org).
2. **GnuPG (GNU Privacy Guard):** The modern, open-source PGP implementation. 
   - Install it via your package manager:
     - **Linux:** `sudo apt install gnupg` (Debian/Ubuntu) or `sudo pacman -S gnupg` (Arch).
     - **Mac:** `brew install gnupg` (via Homebrew).
     - **Windows:** Use [Gpg4win](https://gpg4win.org/).
3. **Email client with PGP support** (optional):
   - Thunderbird with the **Enigmail** or **p≡p** plugin.
4. **OnionShare** (optional): For anonymous file sharing over Tor.

---

### **4. Setting Up PGP**
#### **4.1 Generate a Key Pair**
Your PGP key pair consists of:
- A **public key** (shared with others to encrypt messages to you).
- A **private key** (kept secret for decrypting messages and signing).

1. Open a terminal and run:
   ```bash
   gpg --full-generate-key
   ```
2. Follow the prompts:
   - Choose RSA and RSA as your key type.
   - Set a key size (2048 bits is sufficient, but 4096 is recommended for added security).
   - Specify the key validity (e.g., 1 year).
   - Enter your name, email, and a strong passphrase.

3. Export your public key:
   ```bash
   gpg --armor --export your_email@example.com > public_key.asc
   ```
   Share this key with your sources.

4. Back up your private key:
   ```bash
   gpg --armor --export-secret-keys your_email@example.com > private_key.asc
   ```
   Store it securely (e.g., on an encrypted USB drive).

#### **4.2 Import a Public Key**
If a source shares their public key:
1. Save the key as `source_public_key.asc`.
2. Import it:
   ```bash
   gpg --import source_public_key.asc
   ```

#### **4.3 Verify a Key**
To ensure a public key belongs to the claimed person, verify its fingerprint:
```bash
gpg --fingerprint source_email@example.com
```

---

### **5. Using PGP with Tor**
#### **5.1 Encrypting a Message**
1. Write your message in a text file (e.g., `message.txt`).
2. Encrypt it:
   ```bash
   gpg --armor --encrypt --recipient source_email@example.com message.txt
   ```
3. The encrypted message will be saved as `message.txt.asc`.

#### **5.2 Decrypting a Message**
1. Save the encrypted message as `encrypted.asc`.
2. Decrypt it:
   ```bash
   gpg --decrypt encrypted.asc
   ```

#### **5.3 Signing a Message**
To prove a message comes from you, sign it:
```bash
gpg --armor --sign message.txt
```

---

### **6. Best Practices for Journalists**
1. **Use Tor for All Communications:** Always run your email client or file-sharing tools through Tor.
2. **Verify Keys:** Ensure the authenticity of your source’s key before sharing sensitive information.
3. **Keep Private Keys Secure:** Never store private keys on devices connected to the internet.
4. **Use Secure Email Providers:** Services like ProtonMail or Tutanota support PGP encryption.
5. **Share Keys Securely:** Exchange public keys via verified channels, such as an in-person meeting or a secure file-sharing service like OnionShare.

---

### **7. Troubleshooting**
#### **7.1 Common Errors**
- **"No public key found" when encrypting:** Ensure you've imported the recipient’s public key.
- **Decryption fails:** Confirm you’re using the correct private key and passphrase.

#### **7.2 Debugging Commands**
- List your keys:
  ```bash
  gpg --list-keys
  ```
- List imported keys:
  ```bash
  gpg --list-secret-keys
  ```

---

### **8. Combining Tor Services**
For added privacy, share encrypted messages via .onion services or platforms:
- Use **OnionShare** for anonymous file sharing.
- Communicate via **SecureDrop**, a whistleblower submission system for journalists.

---

By combining PGP and Tor, you can maintain the highest levels of privacy and security in your journalistic endeavors. Always stay vigilant, follow best practices, and ensure your sources understand these tools to protect their identities.

ai generated btw