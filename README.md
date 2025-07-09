# Lexisg-frontend-intern-test

This is a React + TypeScript frontend project that simulates a Lexi-like legal assistant. It allows users to enter a legal query, see a generated answer, and view linked citations that open the original PDF document. The UI is built using **Chakra UI** for modern and responsive styling.

---

## 🚀 How to Run the Project

To get the project running locally:

```bash
npm install
npm run dev
```

Then open your browser and go to:

```
http://localhost:5173
```

---

## 📸 Screenshot / Screen Recording

> ![alt text](<Frontend Assignment Screenshot.png>)

The UI mimics a ChatGPT-like interface with:

- Chat bubbles for user questions and AI responses
- A legal answer card with citations
- A clean layout using Chakra UI

---

## 🔗 How Citation Linking Was Handled

- Below each AI-generated answer, the citation is shown with:
  - Quoted legal text from the judgment
  - PDF source file name
  - A clickable hyperlink to the PDF judgment file
- The link opens the **PDF in a new browser tab**
- A small note below the citation simulates that the content is in **Paragraph 7**
- No backend is used — the citation and answer are hardcoded to simulate an API response

### Example Citation Rendered:

> “as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.”  
> — [Dani_Devi_v_Pritam_Singh.pdf](https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz)  
> _(See Paragraph 7)_

---

**Note:**  
This is a simulated project with no backend. The data is mocked in the frontend for demo purposes.

---

**Submitted for:** Lexi Frontend Internship Test  
📧 Contact: [hi@lexi.sg](mailto:hi@lexi.sg)
