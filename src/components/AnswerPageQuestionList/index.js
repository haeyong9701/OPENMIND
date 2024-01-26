import AnswerPageQuestion from '../AnswerPageQuestion';
import QuestionListContainer from './style';

const AnswerPageQuestionList = ({ user, questions }) => {
  return (
    <QuestionListContainer>
      <div className="question-list-wrap">
        <div className="list-title-wrap">
          <img src="/assets/images/messagesBrown40.svg" alt="메시지 아이콘" />
          <h3 className="list-title">
            {user.questionCount}개의 질문이 있습니다.
          </h3>
        </div>
        <AnswerPageQuestion user={user} questions={questions} />
      </div>
    </QuestionListContainer>
  );
};

export default AnswerPageQuestionList;