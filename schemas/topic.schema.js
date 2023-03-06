import * as yup from "yup";

export const topicSchema = yup.object({
  title: yup.string().required("Fill this required field"),
  day: yup.number().required("Fill this required field"),
  author_name: yup.string().required("Fill this required field"),
  author_email: yup.string().email().required("Fill this required field"),
  video: yup.string().required("Fill this required field"),
  description: yup.string().required("Fill this required field"),
});
