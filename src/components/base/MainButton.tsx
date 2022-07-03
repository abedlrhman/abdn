import React from 'react'

type Props = {
  title: String;
  customStlyes: string;
};

function MainButton({title, customStlyes}: Props) {
  return (
    <button
      className={`border px-4 py-1 rounded-sm ${customStlyes}`}
    >
      {title}
    </button>
  );
}

export default MainButton