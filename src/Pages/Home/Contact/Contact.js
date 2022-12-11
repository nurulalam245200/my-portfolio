import React from "react";

import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xknedkky");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    // <div className="bg-sky-400 mt-24 mb-24 p-10 w-3/4 mx-auto">
    //   <h1 className="text-3xl text-white">Contact Me With Email</h1>
    //   <div className="contactForm">
    //     <form
    //       action="https://formspree.io/f/xknedkky"
    //       method="POST"
    //       id="contact-form"
    //       onSubmit={handleSubmit}
    //       noValidate
    //     >
    //       <div className="grid grid-cols-2">
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Name</span>
    //           </label>
    //           <input
    //             type="text"
    //             name="name"
    //             {...register("name", {
    //               required: {
    //                 value: true,
    //                 message: "Please enter your name",
    //               },
    //               maxLength: {
    //                 value: 30,
    //                 message: "Please use 30 characters or less",
    //               },
    //             })}
    //             className="input input-bordered w-1/2"
    //             placeholder="Name"
    //           ></input>
    //           {errors.name && (
    //             <span className="errorMessage">{errors.name.message}</span>
    //           )}
    //         </div>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Email</span>
    //           </label>
    //           <input
    //             type="email"
    //             name="email"
    //             {...register("email", {
    //               required: true,
    //               pattern:
    //                 /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    //             })}
    //             className="input input-bordered w-1/2"
    //             placeholder="Email address"
    //           ></input>
    //           {errors.email && (
    //             <span className="errorMessage">
    //               Please enter a valid email address
    //             </span>
    //           )}
    //         </div>

    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Subject</span>
    //           </label>
    //           <input
    //             type="text"
    //             name="subject"
    //             {...register("subject", {
    //               required: {
    //                 value: true,
    //                 message: "Please enter a subject",
    //               },
    //               maxLength: {
    //                 value: 75,
    //                 message: "Subject cannot exceed 75 characters",
    //               },
    //             })}
    //             className="input input-bordered w-1/2"
    //             placeholder="Subject"
    //           ></input>
    //           {errors.subject && (
    //             <span className="errorMessage">{errors.subject.message}</span>
    //           )}
    //         </div>

    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Message</span>
    //           </label>
    //           <textarea
    //             rows={3}
    //             name="message"
    //             {...register("message", {
    //               required: true,
    //             })}
    //             className="input input-bordered w-1/2"
    //             placeholder="Message"
    //           ></textarea>
    //           {errors.message && (
    //             <span className="errorMessage">Please enter a message</span>
    //           )}
    //         </div>
    //       </div>

    //       <button className="btn w-full mx-auto mt-5 mb-5" type="submit">
    //         Submit
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="bg-sky-400 mt-24 mb-24 p-10 w-3/4 mx-auto">
      <h1 className="text-3xl text-white">Contact Me With Email</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Enter Name"
            className="input input-bordered w-1/2"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email"
            className="input input-bordered w-1/2"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="input input-bordered w-1/2"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
