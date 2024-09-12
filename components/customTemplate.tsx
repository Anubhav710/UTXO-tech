interface CustomTemplateProps {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const CustomTemplate = ({
  name,
  email,
  mobile,
  message,
}: CustomTemplateProps) => {
  return (
    <div>
      <h2>Here are the details</h2>
      <table>
        <tr>
          <th>Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>E-mail</th>
          <td>
            <a href={`mailto:${email}`}>{email}</a>
          </td>
        </tr>
        <tr>
          <th>Mobile</th>
          <td>{mobile}</td>
        </tr>
        <tr>
          <th>Products Enquired</th>
          <td>NULL</td>
        </tr>
        <tr>
          <th>Requirements</th>
          <td>NULL</td>
        </tr>
      </table>
      <div>
        <div>
          <h1 className="text-xl">{message} </h1>
        </div>
      </div>
    </div>
  );
};

export default CustomTemplate;
{
  /* <h3 className="">Got a question?</h3>
        <p>We're here to help you</p>
        <p>
          The best way to reach us @{" "}
          <a href="mailto:support@visiontradeindia.com">
            support@visiontradeindia.com
          </a>
          <br />
          or call us @ <a href="tel:+919711955269">(+91) 9711955269</a>
        </p> */
}
