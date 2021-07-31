import {
  Button, Card, Form, Image, Input,
} from 'semantic-ui-react';

const NewQuestionComponent = ({
  user, optionOne, optionTwo, handleInputChange, submitNewQ,
}) => (
  <Card style={{ width: '400px' }} centered>
    <Card.Content>
      <Image floated="right" size="tiny" src={user.avatarURL} />
      <Card.Header>
        {user.name}
        {' '}
        asks
      </Card.Header>
      <div>Would you rather</div>
      <Card.Description>
        <Form>
          <Form.Field>
            <Input
              id="optionOne"
              name="optionOne"
              placeholder="Enter Option One Text Here"
              value={optionOne}
              onChange={handleInputChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <Input
              id="optionTwo"
              name="optionTwo"
              placeholder="Enter Option One Text Here"
              value={optionTwo}
              onChange={handleInputChange}
              required
            />
          </Form.Field>
        </Form>
      </Card.Description>
    </Card.Content>

    <Card.Content extra>
      <div className="ui two buttons">
        <Button basic color="black" onClick={submitNewQ}>
          Submit
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default NewQuestionComponent;
export {
  NewQuestionComponent,
};
