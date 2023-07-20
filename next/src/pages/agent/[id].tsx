import React from 'react';
import { Form, Field } from 'formik';

const AvatarSelection = ({ avatars, selectedAvatar, onAvatarSelect }) => {
  return (
    <div>
      {avatars.map(avatar => (
        <div key={avatar} onClick={() => onAvatarSelect(avatar)}>
          <img src={avatar} alt="avatar" style={{ border: avatar === selectedAvatar ? '2px solid blue' : 'none' }} />
        </div>
      ))}
    </div>
  );
};

const AgentEditForm = ({ agent, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      {/* Other form fields... */}
      <Field name="avatar">
        {({ field }) => (
          <AvatarSelection
            avatars={/* List of available avatars */}
            selectedAvatar={field.value}
            onAvatarSelect={avatar => field.onChange({ target: { name: 'avatar', value: avatar } })}
          />
        )}
      </Field>
      <button type="submit">Save</button>
    </Form>
  );
};

export default AgentEditForm;