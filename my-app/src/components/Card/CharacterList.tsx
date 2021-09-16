import { createStyles, ImageList, ImageListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(createStyles({
    cardList: {
        width: '100%',
        gap:'0%'
    },
    cardListItem: {
        minWidth: '450px',
        marginBottom: '40px'
    }
}));

export interface CharacterListProps {
    cards: JSX.Element[],
    cols: number
};

const CharacterList = ({cards, cols} : CharacterListProps) : JSX.Element => {
    const styles = useStyles();
    return <ImageList className={styles.cardList} cols={cols} rowHeight={'auto'} >
            {Itemize(cards)}
        </ImageList>
};

const Itemize = (cards : JSX.Element[]) : JSX.Element[] => {
    const styles = useStyles();
    const out : JSX.Element[] = [];
    
    //TODO: If we have time, set the rows and cols taken up based on the code size / some metric.
    cards.forEach(card => {
        out.push(<ImageListItem className={styles.cardListItem}>
                {card}
            </ImageListItem>)
    });

    return out;
}

export default CharacterList;