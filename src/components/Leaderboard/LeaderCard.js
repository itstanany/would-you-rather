import { Card, Image, Label, Grid } from "semantic-ui-react";


const LeaderCard = ({
  user, index,
}) => {
  return (
    <Card key={user.id}>
      <Image src={user.avatarURL} />
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          Rank &nbsp;
          <Label size="tiny">
            {
              index + 1
            }
          </Label>
        </Card.Meta>
        <Card.Description>
          <Grid /* columns={2}  */ divided style={{ fontSize: "1rem" }}>
            <Grid.Row>
              <Grid.Column floated="left" width={11}>
                Answered: {Object.keys(user.answers)?.length || null}
                <br />
                Created: {user.questions.length}
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <div>
                  <strong>Score</strong>
                </div>
                <Label circular size="large">
                  {user.totalScore}
                </Label>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Description>
      </Card.Content>
    </Card>);
}

export default LeaderCard;
export {
  LeaderCard,
}