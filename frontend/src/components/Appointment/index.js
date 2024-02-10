import React from 'react';
import Confirm from './Confirm';
import Empty from './Empty';
import Form from './Form';
import Header from './Header';
import Show from './Show';

import './styles.scss';

const Appointment = (props) => {
  const [add, setAdd] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [interviewState, setInterviewState] = React.useState(props.interview);
  async function saveCreate(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    const newInterview = await props.handleCreateInterview(props.id, interview);
    console.log('newInterview:', newInterview);
    setInterviewState(newInterview);
    setAdd(false);
  }

  const saveUpdate = async (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    const updatedInterview = await props.handleUpdateInterview(
      interviewState.id,
      interview
    );

    setInterviewState(updatedInterview);
    setEdit(false);
  };

  const interviewers = props.interviewers;
  const interviewer = interviewState?.interviewer;

  return (
    <article className="appointment">
      <Header time={props.time} />
      {interviewState ? (
        isDeleting ? (
          // delete confirm component
          <Confirm
            message={'Are you sure you want to delete?'}
            onCancel={() => setIsDeleting(false)}
            onConfirm={() => {
              props.cancelInterview(interviewState.id);
              setIsDeleting(false);
            }}
          />
        ) : edit ? (
          <Form
            student={interviewState.student}
            interviewer={interviewer}
            interviewers={interviewers}
            onSave={saveUpdate}
            onCancel={() => setEdit(false)}
          />
        ) : (
          <Show
            student={interviewState.student}
            interviewer={interviewer}
            interviewers={interviewers}
            onEdit={() => setEdit(true)}
            onDelete={() => setIsDeleting(true)}
          />
        )
      ) : add ? (
        <Form
          interviewers={interviewers}
          onSave={saveCreate}
          onCancel={() => setAdd(false)}
        />
      ) : (
        <Empty onAdd={() => setAdd(true)} />
      )}
    </article>
  );
};

export default Appointment;
