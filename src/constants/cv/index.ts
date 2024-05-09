import { CvDocument } from "@/types/CvDocument";

export const starterCvDocument: CvDocument = {
  id: "n/a",
  metadata: {
    name: "untitled-document",
  },
  sections: [
    {
      id: "n/a",
      type: "header",
      name: "Lorem Ipsum",
      email: "lorem@ipsum.com",
      phone: "123456789",
      address: "1 Lorem Street, Ipsum",
    },
    {
      id: "b",
      type: "standard",
      heading: "Employment",
      content: [
        {
          id: "n/a",
          type: "list",
          heading: "Company A - [Position]",
          items: [
            {
              id: "n/a",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            },
            {
              id: "n/a",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            },
            {
              id: "n/a",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            },
            {
              id: "n/a",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            },
            {
              id: "n/a",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            },
          ],
        },
        {
          id: "n/a",
          type: "list",
          heading: "Company B - [Position]",
          items: [
            {
              id: "n/a",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            },
            {
              id: "n/a",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            },
            {
              id: "n/a",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            },
          ],
        },
      ],
    },
  ],
};
