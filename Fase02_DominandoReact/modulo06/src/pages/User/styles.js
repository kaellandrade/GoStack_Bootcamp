import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: #eee;
`;
export const Name = styled.Text`
    font-size: 20px;
    color: #333;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
`;
export const Profile = styled.View`
    margin-left: 3px;
`;
export const Bio = styled.Text`
    font-size: 14px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
`;
export const Header = styled.View`
    align-items: center;
    padding-bottom: 20px;
    border-color: #d6d6d6;
    border-bottom-width: 1px;
`;

export const Stars = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;
export const Starred = styled.View`
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;
export const OwnerAvatar = styled.Image`
    height: 42px;
    width: 42px;
    border-radius: 21px;
    background-color: #eee;
`;
export const Info = styled.View`
    margin-left: 10px;
    flex: 1;
`;
export const Title = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #333;
`;
export const Author = styled.Text`
    font-size: 13px;
    color: #666;
    margin-top: 2px;
`;
export const Loading = styled.View`
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: row;
    justify-content: center;
`;
export const Label = styled.Text`
    font-size: 20px;
    color: #666;
`;
